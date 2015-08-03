define(['text!components/board/boardComponent.tpl.html',
        'libsVendor'], function(Template,
                                libsVendor){

    var Board, Template;

    console.log(libsVendor);
    Template = Template;

    Board = function(){
       console.log('connecting boardComponent')
       return Template;
    };

    return Board;
});