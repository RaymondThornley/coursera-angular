(function () {
    "use strict";

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController() {
        const narrowIt = this;

        narrowIt.searchValue = "";
        narrowIt.found = [];

        narrowIt.startSearch = function () {
            MenuSearchService.getMatchedMenuItems(narrowIt.searchValue).then(function (response) {
                narrowIt.found = response;
            });
        }

        narrowIt.removeItem = function (index) {
            narrowIt.found.splice(index, 1);
        }
    }

    function MenuSearchService() {
        const menuSearch = this;

        menuSearch.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) {
                let foundItems = [];
                for (let i = 0; i < result.menu_items.length; i++) {
                    if (result.menu_items[i].description.includes(searchTerm)) {
                        foundItems.push(result.menu_items[i]);
                    }
                }
                return foundItems;
            });
        }
    }
})();
