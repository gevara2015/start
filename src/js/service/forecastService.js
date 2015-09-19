define(['libsVendor',
    'components/models/geomodel'], function (libsVendor,
                                             LocationModel) {

    var $ = libsVendor.$,
        LocationModel;

    BoardModel = LocationModel;

    var Backbone = libsVendor.backbone;


    BoardModel = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.getForecast = this.GetForecast();
            this.wPromise = $.Deferred();
            this.result;

        },
        GetForecast: function () {
            //получать широту и долготу нужно из другой модели
            var currentlyLocation = LocationModel.GetLocation;
            console.log(currentlyLocation);
            var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/37.8267,122.432?callback=?",
                self = this,
                dataWeather;
            return $.getJSON(forecastAPI, function (data) {
                self.result = data;
                self.wPromise.resolve();
            });
        }
    });

    return new BoardModel();
});