define(['../libsVendor'], function (libsVendor) {


    //Template = Template;

    var Backbone= libsVendor.backbone;
    _.
    WeatherModel = Backbone.Model.extend({
        defaults: {
            'fullInfo': 'test'
        },

        initialize: function () {
            var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/37.8267,-122.423?callback=?",
                dataWeather;

            this.wPromise = $.getJSON(forecastAPI);
            console.log("obj created");
            wPromise.done(function (dataWeather) {
                var jsonString = JSON.stringify({dataWeather});
            });

        }

    });


    return WeatherModel;
});