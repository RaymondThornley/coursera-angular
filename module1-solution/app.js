(function () {
    "use strict";

    const controllerFuntion = function ($scope) {
        $scope.lunchText = "";
        $scope.message = "";

        $scope.calculateLunch = function () {
            if($scope.lunchText.length === 0){
                $scope.message = "Please enter data first";
                return;
            }

            const lunchList = $scope.lunchText.split(",");

            if (lunchList.length > 3){
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        }
    };

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", controllerFuntion);
})();
