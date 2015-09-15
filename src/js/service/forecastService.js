define(['libsVendor'], function (libsVendor) {


    //Template = Template;

    var Backbone = libsVendor.backbone;

    BoardModel = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.GetForecast();
        },
        GetForecast: function () {
            var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/37.8267,-122.423?callback=?",
                dataWeather,
                wPromise = $.getJSON(forecastAPI);

            wPromise.done(function (dataWeather) {
                var jsonString = JSON.stringify(dataWeather);

            });
        }
    });

    return BoardModel;
});