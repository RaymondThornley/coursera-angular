(function () {
    "use strict";

    angular.module("MenuApp")
        .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["MenuDataService", "categories"];
    function CategoriesController(MenuDataService, categories) {
        const controller = this;
        controller.categories = categories;
    }
})();
