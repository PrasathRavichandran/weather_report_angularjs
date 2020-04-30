// Initializing data services
angular.module("weatherReport").service("dataApiService", [
  "$resource",
  function ($resource) {
    this.getWeatherData = function (city) {
      let weatherApi = $resource(
        "https://api.openweathermap.org/data/2.5/forecast"
      );
      return weatherApi.get({
        q: city,
        appid: "",
        cnt: 10,
      });
    };
  },
]);
