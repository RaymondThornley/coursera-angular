(function () {
    "use strict";

    angular.module("MenuApp")
        .controller("ItemsController", ItemsController);

    ItemsController.$inject = ["MenuDataService", "items"];
    function ItemsController(MenuDataService, items) {
        let controller = this;
        controller.items = items;
    }
})();
