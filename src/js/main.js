define('main', ['components/componentsVendor/main'], function(componentsVendor){

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
        '$board'    : '#board',
        '$search'   : '#search',
        '$settings' : '#settings'
    };

    /**
     * APP components
     * */
    Board    = componentsVendor.boardComponent();
    Search   = componentsVendor.searchComponent();
    Settings = componentsVendor.settingsComponent();

    /**
     * Adding components in the DOM
     * */
   boardWrapper    = document.querySelector($holders.$board).innerHTML    = Board;
   searchWrapper   = document.querySelector($holders.$search).innerHTML   = Search;
   settingsWrapper = document.querySelector($holders.$settings).innerHTML = Settings;

});