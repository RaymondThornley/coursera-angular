(function () {
    "use strict";

    angular.service("MenuDataService", MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        const service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function (result) {
                return result.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
            }).then(function (result) {
                return result.data;
            });
        };
    }
})();
