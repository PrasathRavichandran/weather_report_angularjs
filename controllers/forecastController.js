// Initializing forecast controller
angular.module("weatherReport").controller("forecastController", [
  "$scope",
  "cityService",
  "dataApiService",
  function ($scope, cityService, dataApiService) {
    $scope.city = cityService.city;
    
    if ($scope.city !== "") {
      $scope.weatherApiResult = dataApiService.getWeatherData($scope.city);
    }

    $scope.convertToFahrenhiet = function (deg) {
      return Math.round(1.8 * (deg - 273) + 32);
    };

    $scope.convertToDate = function (dt) {
      return new Date(dt * 1000);
    };
  },
]);
