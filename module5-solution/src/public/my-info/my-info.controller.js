(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', "ApiPath"];
    function MyInfoController(MenuService, ApiPath) {
        let controller = this;

        controller.apiPath = ApiPath;
        controller.user = MenuService.getUser();
        controller.dish = {}

        if(controller.user !== null){
            MenuService.getItem(controller.user.favDish)
            .then(function(result){
                controller.dish = result;
            })
        }
    }

})();
