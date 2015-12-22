System.register(['angular2/platform/browser', './app.component', "./domain/service"], function(exports_1) {
    var browser_1, app_component_1, service_1;
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
            }],
        execute: function() {
            console.info('starting Evently...');
            browser_1.bootstrap(app_component_1.AppComponent, [service_1.ApplicationService]);
        }
    }
});
//# sourceMappingURL=boot.js.map