// Initializing home controller
angular.module("weatherReport").controller("homeController", [
  "$scope",
  "$location",
  "$interpolate",
  "cityService",
  function ($scope, $location, $interpolate, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });

    $scope.searchCity = function () {
      if ($scope.city !== "") {
        const url = $interpolate("/forecast/{{city}}")($scope);
        $location.url(url);
      } else {
        return;
      }
    };
  },
]);
