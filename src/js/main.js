define('main', ['components/componentsVendor/main'], function (componentsVendor) {

    var $holders,
        Board,
        Search,
        Settings,
        boardWrapper,
        searchWrapper,
        settingsWrapper;

    /**
     * DOM holders
     * */
    $holders = {
        '$board': '#board',
        '$search': '#search',
        '$settings': '#settings'
    };

    /**
     * APP components
     * */
    Board = new componentsVendor.boardComponent({'el': $holders.$board});
    Search = componentsVendor.searchComponent();
    Settings = componentsVendor.settingsComponent();

    /**
     * Adding components in the DOM
     * */

    searchWrapper = document.querySelector($holders.$search).innerHTML = Search;
    settingsWrapper = document.querySelector($holders.$settings).innerHTML = Settings;

    //initialize sliders
    $("#range_01").ionRangeSlider({
        min: 1,
        max: 7,
        from: 3,
        postfix: " days"
    });

    $("#range_02").ionRangeSlider({
        min: 3,
        max: 60,
        from: 15,
        step: 5,
        postfix: " min"
    });

    $('.whole-day').getNiceScroll();

    $('.menu-btn').click(function () {
        $('.settings').toggleClass('hide-block');
    });

    $('.toggle-conf a').click(function () {
        $('.w-conf').toggleClass('open-block');
    });

    $('.refresh').click(function () {
        showWeather(currentLatitude, currentLongitude);
    });


    var now = new Date();

    function fMinutes(minutes) {
        var minutes = now.getMinutes();

        return minutes;
    }

    function fHours(hours) {
        var hours = now.getHours();

        return hours;
    }

    function fWeekday(day) {
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = now.getDay();

        return weekday[day];
    }

    function fMonth(month) {
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var day = now.getMonth();

        return month[day];
    }

    function fDate(date) {
        var date = now.getDate();

        return date;
    }

    if ("geolocation" in navigator) {
        var currentLatitude,
            currentLongitude;

        navigator.geolocation.getCurrentPosition(function (location) {
            currentLatitude = location.coords.latitude;
            currentLongitude = location.coords.longitude;
            //showWeather(currentLatitude, currentLongitude);
        });
    }


    function showWeather(lati, long) {

        var apiKey = 'c96591b04685db940f3b395e3de0cffc';
        var url = 'https://api.forecast.io/forecast/';
        var lati = lati;
        var longi = long;
        var dataWeather;

        $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function (dataWeather) {
            var currentryTemperature = Math.ceil(((dataWeather.currently.temperature - 32) * 5 / 9)),
                currentlyHumitidy = Math.ceil(dataWeather.currently.humidity * 100),
                currentlyWindSpeed = Math.ceil(dataWeather.currently.windSpeed * 1.6),
                windBearing = dataWeather.currently.windBearing;

            //console.log(JSON.stringify({dataWeather}));

            $('.date').html(fWeekday() + ', ' + fMonth() + ' ' + fDate());
            $('.big-icon em').removeClass().addClass('icon-' + dataWeather.currently.icon);
            $('.state-description').html('// ' + dataWeather.currently.summary);
            $('.currently-temperature').html(currentryTemperature + ' <sup>o</sup>');
            $('.humidity').html(currentlyHumitidy + '%');
            $('.wind-speed').html(currentlyWindSpeed + 'm/c');
            $('.icon-wind-direction').css({
                'transform': "rotate(" + windBearing + "deg)"
            });


        });
    }

    //changes for DOM
    $('.last-update').html(fHours() + ":" + fMinutes());


    //    return 'https://api.forecast.io/forecast/' + 'c96591b04685db940f3b395e3de0cffc' + "/" + lati + "," + longi + "?callback=?";
    //'https://api.forecast.io/forecast/' + 'c96591b04685db940f3b395e3de0cffc' + "/" + '49.44' + "," + '32.05' + "?callback=?"

    /*var weatherModel = Backbone.Model.extend({
        defaults: {
            'locid': '00000',
            'size': 100,
            'fullInfo': 'test'
        },

        initialize: function () {
            console.log("obj created");
        },

        validate: function () {
        },

        MOY: function (monthNum) {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthNum];
        },
        DOW: function (dayNum) {
            return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayNum];
        },

        url: function () {
            return 'abra';
        },

        receiveJson: function(){
            weatherModel.set({
                'fullInfo': this.url().text()
            })
        }
    });

    var weatherView = Backbone.View.extend({
        events: {
            'click .changeSize': "changeSize"
        },
        initialize: function () {
            this.template = _.template($('#viewBoard').html());
            this.listenTo(this.model, "change", this.render);
            this.render();
        },
        render: function () {
            var json = this.model.toJSON();
            var view = this.template(json);
            this.$el.html(view);
            console.log(json);
        },

        receiveJson: function(){
            this.url();
            this.model.set({
                'fullInfo': this.url()
            })
        }
    });

    weatherModel = new weatherModel({});

    var view = new weatherView({
        el: '#test',
        model: weatherModel
    });*/

    //add CANVAS animation


    /*var can1, ctx1 = 0;
     can1 = document.getElementsByClassName("sun-anim");
     ctx1 = can1.getContext("2d");

     sun();

     function sun(){
     var sun = ctx1.createLinearGradient(0, 0, can.width, 0);
     ctx1.clearRect(0, 0, can1.width, can1.height);
     ctx1.save();

     ctx1.fillStyle = sun;
     ctx1.fillRect(0, 0, can1.width, can1.height);
     ctx1.restore();
     }*/


    var can, ctx = 0;

    can = document.getElementById("can");
    ctx = can.getContext("2d");
    //var t = setInterval(background, 24);

    background();

    // animate() is called every 50 msec
    function background() {

        // create gradient that goes from bottom to top of canvas
        var grad = ctx.createLinearGradient(0, 0, can.width, 0);

        // start gradient at blue
        var time = 20,
            coldDayColor = '#166eef',
            coldNightColor = '#080b22';

        switch (true) {
            case (3 <= time && time < 9):
                grad.addColorStop(0, coldDayColor);
                grad.addColorStop(1, coldNightColor);
                break;
            case (9 <= time && time < 15):
                grad.addColorStop(1, coldDayColor);
                break;
            case (15 <= time && time < 21):
                grad.addColorStop(0, coldNightColor);
                grad.addColorStop(1, coldDayColor);
                break;
            case (21 <= time && time < 24 || time < 3):
                grad.addColorStop(1, coldNightColor);
                break;
            default :
                grad.addColorStop(0, coldDayColor);
                grad.addColorStop(1, coldDayColor);
        }

        // clear canvas, fill canvas with gradient
        ctx.clearRect(0, 0, can.width, can.height);
        ctx.save();
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, can.width, can.height);
        ctx.restore();
    }


});