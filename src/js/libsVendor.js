define(['jQuery',
    'lodash',
    'backbone',
    'ionRangeSlider',
    'niceScroll'], function (jQuery,
                                 lodash,
                                 backbone, ionRangeSlider, niceScroll) {
    return {
        '$'             : jQuery,
        'lodash'        : lodash,
        'backbone'      : backbone,
        'ionRangeSlider': ionRangeSlider,
        'niceScroll'    : niceScroll
    }

});