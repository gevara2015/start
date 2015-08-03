require.config({
    baseUrl: 'js',

    paths: {

        /**
         * libs*/
        /*textjs not situated in bower!!!!Will be changed*/
        'text'               :  '../../bower_components/requirejs-plugins/lib/text',
        'jQuery'             :  '../../bower_components/jquery/dist/jquery',
        'lodash'             :  '../../bower_components/lodash/lodash',
        'backbone'           :   '../../bower_components/backbone/backbone',

        /**
         *apps components */
        'boardComponent'     : 'components/board/boardComponent',
        'searchComponent'    : 'components/search/searchComponent',
        'settingsComponent'  : 'components/settings/settingsComponent',

        /**
         * components wendor*/
        'componentsVendor'   : 'components/componentsVendor/main'
    },

    shim: {

        'jQuery'   : {
            exports: '$'
        },

        'lodash'   : {

            exports: '_'
        },

        'backbone' : {
            /**
             * dependences*/
            deps: [ 'lodash', 'jQuery']
        }
    },


    map: {
        /**
         * alias*/
        '*' : {
            'underscore': 'lodash'
        }
    }


});