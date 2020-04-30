// Initializing card directives
angular.module("weatherReport").directive("weatherReport", function () {
  return {
    restrict: "E",
    templateUrl: "../app/components/weatherCard.html",
    replace: true,
    scope: {
      weatherData: "=",
      convertToStandard: "&",
      convertToDateDirective: "&",
      dateFormat: "@",
    },
  };
});
