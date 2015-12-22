System.register(['angular2/core', "../domain/service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1;
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent(_applicationService) {
                    var _this = this;
                    this._applicationService = _applicationService;
                    _applicationService.getEvents().then(function (events) {
                        return _this._events = events;
                    });
                }
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'event-list',
                        template: "\n\t\t<div>\n\t\t    <ul *ngFor=\"#event of _events\">\n\t\t        <li>{{event.title}}</li>\n\t\t    </ul>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [service_1.ApplicationService])
                ], EventListComponent);
                return EventListComponent;
            })();
            exports_1("EventListComponent", EventListComponent);
        }
    }
});
//# sourceMappingURL=components.js.map