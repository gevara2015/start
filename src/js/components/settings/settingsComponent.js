define(['text!components/settings/settingsComponent.tpl.html'], function(Template){

    var Settings;

    Settings = function(){
        console.log("connecting SettingsComponent");
        return Template
    };

    return Settings;
});