define(['text!components/board/boardComponent.tpl.html',
    'libsVendor',
    'service/fakeService'], function (Template,
                                      libsVendor,
                                      ForecastService) {

    var Board,
        Template,
        weatherModel,
        BoardView;


    weatherModel = ForecastService;
    console.log(weatherModel);

    Board = function () {
        console.log('connect boardComponent');

        return Template;
    };

    BoardView = Backbone.View.extend({

        el: '#board',
        template:'aaaaaaaaaaaaaaaaa',

        initialize: function () {
            this.render()
        },
        render: function () {
            var json = weatherModel;
            this.template = _.template(Template);
            var view = this.template(json);
            $('body').html(view);
        }
    });

    /*GetForecast: function () {
     getForecast();
     function getForecast() {
     var forecastAPI = "https://api.forecast.io/forecast/c96591b04685db940f3b395e3de0cffc/37.8267,-122.423?callback=?",
     dataWeather,
     wPromise = $.getJSON(forecastAPI);

     wPromise.done(function (dataWeather) {
     var jsonString = JSON.stringify(dataWeather);

     });
     }
     }*/

    return function(){return new BoardView()};
});