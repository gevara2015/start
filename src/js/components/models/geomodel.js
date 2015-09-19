define(['libsVendor'], function (libsVendor) {

    var $ = libsVendor.$;

    var Backbone = libsVendor.backbone;


    LocationModel = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.getLocation = this.GetLocation();
            this.wPromise = $.Deferred();
            this.result;
        },
        GetLocation: function (position) {
            if ("geolocation" in navigator) {
                var currentLatitude,
                    currentLongitude;

                navigator.geolocation.getCurrentPosition(function (location) {
                    currentLatitude = location.coords.latitude;
                    currentLongitude = location.coords.longitude;
                    //showWeather(currentLatitude, currentLongitude);
                    //console.log(currentLongitude);
                });
            }
            return currentLatitude;
        }
    });

    return new LocationModel();
});