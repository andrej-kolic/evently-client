System.register(['angular2/platform/browser', './app.component', "./domain/service", "./gui/gui_model"], function(exports_1) {
    var browser_1, app_component_1, service_1, gui_model_1;
    var customProviders;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (gui_model_1_1) {
                gui_model_1 = gui_model_1_1;
            }],
        execute: function() {
            console.info('starting Evently...');
            customProviders = [
                service_1.ApplicationService,
                gui_model_1.GuiContext
            ];
            browser_1.bootstrap(app_component_1.AppComponent, customProviders);
        }
    }
});
//# sourceMappingURL=boot.js.map