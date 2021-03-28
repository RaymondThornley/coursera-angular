(function () {
    "use strict";

    angular.module("ShoppingList")
        .config(RoutesConfig);

    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home", {
            url: "/"
        }).state("categories", {
            url: "/categories",
            templateUrl: "",
            controller: "",
            resolve: {
                categoryList: [MenuDataService, function (MenuDataService) { return MenuDataService.getAllCategories() }]
            }
        }).state("items", {
            url: "/items"
        });
    }

})();
