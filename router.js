// Initializing angular router

angular.module("weatherReport").config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/pages/home.html",
      controller: "homeController",
    })
    .when("/forecast", {
      templateUrl: "app/pages/forecast.html",
      controller: "forecastController",
    })
    .when("/forecast/:city", {
      templateUrl: "app/pages/forecast.html",
      controller: "forecastController",
    })
    .otherwise({
      templateUrl: "app/pages/home.html",
      controller: "homeController",
    });
});
