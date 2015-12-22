System.register(['./model', './service'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (model_1_1) {
                exportStar_1(model_1_1);
            },
            function (service_1_1) {
                exportStar_1(service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=domain_module.js.map