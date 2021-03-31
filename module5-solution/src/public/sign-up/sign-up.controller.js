(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService){
        const controller = this;
        controller.user = {};

        controller.success = false;
        controller.error = false;

        controller.submit = function() {
            MenuService.getItem(controller.user.favDish)
            .then(function(result){
                MenuService.saveUser(user);
                controller.success = true;
            }).error(function(error){
                controller.error = true;
            });
        }
    }
})();
