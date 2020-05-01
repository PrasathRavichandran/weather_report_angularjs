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
        appid: "", // Please Provide your api key. For Refs https://openweathermap.org/appid
        cnt: 10,
      });
    };
  },
]);
