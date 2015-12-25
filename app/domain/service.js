System.register(['./angular2-rest', 'angular2/http', "rxjs/Observable"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_rest_1, http_1, Observable_1;
    var ServerMessage, ApplicationService;
    return {
        setters:[
            function (angular2_rest_1_1) {
                angular2_rest_1 = angular2_rest_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ServerMessage = (function () {
                function ServerMessage() {
                }
                return ServerMessage;
            })();
            exports_1("ServerMessage", ServerMessage);
            ApplicationService = (function (_super) {
                __extends(ApplicationService, _super);
                function ApplicationService(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.EVENTS = [
                        {
                            id: 1,
                            title: "event 1",
                            description: null,
                            location: null,
                            startTime: null
                        },
                        {
                            id: 2,
                            title: "event 2",
                            description: null,
                            location: null,
                            startTime: null
                        }
                    ];
                }
                ApplicationService.prototype.getLocalConfig = function () {
                    var path = 'tsconfig.json';
                    return this.http.get(path);
                };
                ApplicationService.prototype.getPing = function () {
                    return null;
                };
                ;
                ApplicationService.prototype.getUsers = function () {
                    return null;
                };
                ;
                ApplicationService.prototype.getEvents = function () {
                    return null;
                };
                ;
                ApplicationService.prototype.getMockEvents = function () {
                    return Promise.resolve(this.EVENTS);
                };
                ApplicationService.prototype.login = function () {
                };
                __decorate([
                    angular2_rest_1.GET("ping/"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', Observable_1.Observable)
                ], ApplicationService.prototype, "getPing", null);
                __decorate([
                    angular2_rest_1.GET("users/"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', Observable_1.Observable)
                ], ApplicationService.prototype, "getUsers", null);
                __decorate([
                    angular2_rest_1.GET("users/"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', Observable_1.Observable)
                ], ApplicationService.prototype, "getEvents", null);
                ApplicationService = __decorate([
                    angular2_rest_1.BaseUrl("http://localhost:3000/api/v1/"),
                    angular2_rest_1.DefaultHeaders({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApplicationService);
                return ApplicationService;
            })(angular2_rest_1.RESTClient);
            exports_1("ApplicationService", ApplicationService);
        }
    }
});
//# sourceMappingURL=service.js.map