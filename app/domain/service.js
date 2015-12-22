System.register([], function(exports_1) {
    var ApplicationService;
    return {
        setters:[],
        execute: function() {
            ApplicationService = (function () {
                function ApplicationService() {
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
                ApplicationService.prototype.getEvents = function () {
                    return Promise.resolve(this.EVENTS);
                };
                return ApplicationService;
            })();
            exports_1("ApplicationService", ApplicationService);
        }
    }
});
//# sourceMappingURL=service.js.map