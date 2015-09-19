define(['text!components/board/boardComponent.tpl.html',
        'libsVendor',
        'service/forecastService',
        'service/geoLocation'], function (Template,
                                          libsVendor,
                                          ForecastService,
                                          geoLocationModel) {

    var Template,
        position,
        weatherModel,
        BoardView,
        $ = libsVendor.$;


     position = new geoLocationModel();

        
        
   /**
    * init BoardView
    */
    BoardView = Backbone.View.extend({
        template:Template,
        initialize: function () {
            console.log('connect boardComponent');
            var self = this;

            $.when(position.Promise).done(function(){
                
                weatherModel = new ForecastService({'currentLatitude': position.result.currentLatitude,
                                                   'currentLongitude': position.result.currentLongitude});
       
                $.when(weatherModel.wPromise).done(function(){
                  console.log(weatherModel)  
                  self.render(weatherModel.result)
                });
            });


        },
        render: function (json) {
            this.template = _.template(this.template);
            var view = this.template(json);
            this.$el.html(view);
        }
    });

    return BoardView;
});