define(['text!components/board/boardComponent.tpl.html',
    'libsVendor'], function (Template,
                             libsVendor) {

    var Board,
        Template,
        weatherModel,
        weatherView;

    //Template = Template;

    weatherModel = Backbone.Model.extend({
        defaults: {
            'fullInfo': 'test'
        },

        initialize: function () {
            console.log("obj created");
            this.render();
        },

        render: function () {
            var sRender = this;
            getForecast();
            function getForecast() {
                var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/37.8267,-122.423?callback=?",
                    dataWeather,
                    wPromise = $.getJSON(forecastAPI);

                wPromise.done(function (dataWeather) {
                    var jsonString = JSON.stringify({dataWeather});
                    //console.log(jsonString);
                });
            }
        }

    });

    weatherView = Backbone.View.extend({
        events: {},
        initialize: function () {
            this.render();
        },
        render: function () {
            var json = this.model.toJSON();
            console.log(json);
        },

        receiveJson: function () {
        }
    });

    weatherModel = new weatherModel({});

    var view = new weatherView({
        model: weatherModel
    });

    Board = function () {
        console.log('connect boardComponent');

        return Template;
    };

    return Board;
});