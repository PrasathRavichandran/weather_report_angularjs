// Initializing forecast controller
angular.module("weatherReport").controller("forecastController", [
  "$scope",
  "$routeParams",
  "cityService",
  "dataApiService",
  function ($scope, $routeParams, cityService, dataApiService) {
    $scope.city = $routeParams.city || cityService.city;
    $scope.errorHandler = false;
    $scope.errorMessage = "";

    function getCity(city) {
      dataApiService.getWeatherData(city).$promise.then(
        function (response) {
          $scope.weatherApiResult = response.list;
        },
        function (error) {
          if (error.data.message && error.data.cod === "404") {
            $scope.errorHandler = true;
            $scope.errorMessage = error.data.message;
          }
        }
      );
    }

    if ($scope.city !== "") {
      getCity($scope.city);
    } else {
      $scope.city = cityService.defaultCity;
      getCity(cityService.defaultCity);
    }

    $scope.convertToFahrenhiet = function (deg) {
      return Math.round(1.8 * (deg - 273) + 32);
    };

    $scope.convertToCelcius = function (degK) {
      return Math.round(degK - 273);
    };

    $scope.convertToDate = function (dt) {
      return new Date(dt * 1000);
    };
  },
]);
