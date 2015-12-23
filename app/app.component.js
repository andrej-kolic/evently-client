System.register(['angular2/core', './gui/gui_module', "./gui/gui_model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, gui, gui_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gui_1) {
                gui = gui_1;
            },
            function (gui_model_1_1) {
                gui_model_1 = gui_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_guiContext) {
                    this._guiContext = _guiContext;
                    ;
                }
                Object.defineProperty(AppComponent.prototype, "selectedEvent", {
                    get: function () {
                        //if(this._guiContext.selectedEvent) console.log(`access ${this._guiContext.selectedEvent.title}`);
                        return this._guiContext.selectedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div>\n\t\t    <event-list></event-list>\n\t\t    <event-details [event]=\"selectedEvent\"></event-details>\n\t\t</div>\n\t",
                        directives: [gui.EventListComponent, gui.EventDetailsComponent]
                    }), 
                    __metadata('design:paramtypes', [gui_model_1.GuiContext])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map