(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        let controller = this;

        controller.user = MenuService.getUser();
        controller.dish = {}

        if(controller.user !== null){
            MenuService.getItem(controller.user.favDish)
            .then(function(result){
                controller.dish = result.data;
            })
        }
    }

})();
