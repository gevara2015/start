define(['text!components/board/boardComponent.tpl.html',
        'libsVendor',
        'service/forecastService'], function (Template,
                                              libsVendor,
                                              ForecastService) {

    var Template,
        weatherModel,
        BoardView,
        $ = libsVendor.$;


    weatherModel = ForecastService;

    BoardView = Backbone.View.extend({
        template:Template,
        initialize: function () {
            console.log('connect boardComponent');
            var self = this;
            console.log(weatherModel)
            $.when(weatherModel.wPromise).done(function(){
                console.log(weatherModel.result)
                self.render(weatherModel.result)
            });


        },
        render: function (json) {
            this.template = _.template(this.template);
            console.log(json)
            var view = this.template(json);
            this.$el.html(view);
        }
    });

    return BoardView;
});