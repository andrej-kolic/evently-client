System.register(['angular2/core', "../domain/service", "./gui_model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1, gui_model_1;
    var EventListComponent, EventDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (gui_model_1_1) {
                gui_model_1 = gui_model_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent(_guiContext, _appService) {
                    this._guiContext = _guiContext;
                    this._appService = _appService;
                }
                EventListComponent.prototype.onSelect = function (event) {
                    this._guiContext.selectedEvent = event;
                    console.info("selected event: " + this._guiContext.selectedEvent.title);
                };
                EventListComponent.prototype.ngAfterViewInit = function () {
                    console.log('ngAfterViewInit');
                    this._appService.getUsers()
                        .subscribe(function (a) {
                        var users = a.json()['users'];
                        console.log(users[0]);
                    });
                };
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'event-list',
                        template: "\n\t\t<div>\n\t\t    <h2>Event list</h2>\n\t\t    <ul>\n\t\t        <li *ngFor=\"#event of _events\" (click)=\"onSelect(event)\">{{event.title}}</li>\n\t\t    </ul>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [gui_model_1.GuiContext, service_1.ApplicationService])
                ], EventListComponent);
                return EventListComponent;
            })();
            exports_1("EventListComponent", EventListComponent);
            EventDetailsComponent = (function () {
                function EventDetailsComponent() {
                }
                EventDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'event-details',
                        template: "\n        <div *ngIf=\"event\">\n            <h2>Event details</h2>\n            <p>{{event.title}}</p>\n        </div>\n    ",
                        inputs: ['event']
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventDetailsComponent);
                return EventDetailsComponent;
            })();
            exports_1("EventDetailsComponent", EventDetailsComponent);
        }
    }
});
//# sourceMappingURL=components.js.map