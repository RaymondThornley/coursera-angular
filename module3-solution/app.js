(function () {
    "use strict";

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive("foundItems", FoundItemsDirective);

    function FoundItemsDirective() {
        const ddo = {
            templateUrl: "foundItems.html",
            scope: {
                list: "=myList"
            }
        }

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        const narrowIt = this;

        narrowIt.searchValue = "";
        narrowIt.found = [];
        narrowIt.hasSearched = false;

        narrowIt.startSearch = function () {
            MenuSearchService.getMatchedMenuItems(narrowIt.searchValue).then(function (response) {
                narrowIt.found = response;
                narrowIt.hasSearched = true;
            });
        }

        narrowIt.removeItem = function (index) {
            narrowIt.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        const service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) {
                let foundItems = [];
                if (searchTerm.length === 0) {
                    return foundItems;
                }
                const menuItems = result.data.menu_items;
                for (let i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].description.includes(searchTerm)) {
                        foundItems.push(menuItems[i]);
                    }
                }
                return foundItems;
            });
        };
    }
})();
