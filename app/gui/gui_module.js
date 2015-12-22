System.register(['./components'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (components_1_1) {
                exportStar_1(components_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=gui_module.js.map