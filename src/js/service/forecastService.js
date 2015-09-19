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
            
            var self = this,
                /*currentLatitude = this.attributes.currentLatitude,
                currentLongitude = this.attributes.currentLongitude;*/

                currentLatitude = '50.0',
                currentLongitude = '36.15';

                console.log("currentLongitude", currentLatitude)
                console.log("currentLongitude", currentLongitude)

            var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/" + currentLatitude  + "," +currentLongitude+ "?callback=?";
                
                

            return $.getJSON(forecastAPI, function (data) {
                self.result = data;
                console.log(data)
                self.wPromise.resolve();
            });
        }
    });

    return BoardModel;
});