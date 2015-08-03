define(['text!components/search/searchComponent.tpl.html'], function(Template){

    var Search;

     Search = function(){
         console.log("connecting SearchComponent");
         return Template;
     };

    return Search;
});