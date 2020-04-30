// Initializing home controller
angular.module("weatherReport").controller("homeController", [
  "$scope",
  "$location",
  "cityService",
  function ($scope, $location, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });

    $scope.searchCity = function () {
      if ($scope.city !== "") {
        $location.url(["/forecast"]);
      } else {
        return;
      }
    };
  },
]);
