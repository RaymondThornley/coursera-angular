(function () {
    "use strict";

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        const toBuy = this;
        toBuy.itemList = ShoppingListCheckOffService.getToBuyList();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const alreadyBought = this;
        alreadyBought.itemList = ShoppingListCheckOffService.getBoughtList();
    };

    function ShoppingListCheckOffService() {
        const service = this;
        let toBuyList = [
            { name: "cookies", quantity: "10" },
            { name: "chips", quantity: "5" },
            { name: "soda", quantity: "20" },
            { name: "candy", quantity: "5" },
            { name: "ice cream", quantity: "25" }
        ];
        let boughtList = [];

        service.getToBuyList = function () {
            return toBuyList;
        };

        service.getBoughtList = function () {
            return boughtList;
        };

        service.buyItem = function (index) {
            boughtList.push(toBuyList.splice(index, 1)[0]);
        };
    }
})();
