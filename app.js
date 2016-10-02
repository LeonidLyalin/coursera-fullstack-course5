(function() {
  'use strict';

  angular.
    module('LunchCheck', []).
    controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkMeals = function() {
      if (!$scope.mealsString) {
        $scope.message = "Please enter data first";
        $scope.messageType = "danger";
      } else {
        var mealsCount = getMealsCount($scope.mealsString);

        if (mealsCount > 3) {
          $scope.message = "Too much!";
          $scope.messageType = "success";
        } else if (mealsCount > 0) {
          $scope.message = "Enjoy!";
          $scope.messageType = "success";
        } else {
          $scope.message = "Empty meals are not considered";
          $scope.messageType = "danger";
        }
      }
    };

    $scope.getMessageClass = function() {
      return 'alert alert-' + $scope.messageType;
    };
  }

  function getMealsCount(mealsString) {
    var meals = mealsString.split(',').filter(function(meal) {
      return !!meal.trim();
    });

    return meals.length;
  }
})();
