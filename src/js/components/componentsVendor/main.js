define(['boardComponent',
         'searchComponent',
         'settingsComponent'  ], function(boardComponent,
                                          searchComponent,
                                          settingsComponent){


    console.log("connecting componentsVendor");


    return {'boardComponent'    : boardComponent,
            'searchComponent'   : searchComponent,
            'settingsComponent' : settingsComponent };
});