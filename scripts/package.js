console.info("packaging...");


var fse = require('fs-extra');

fse.removeSync('dist');

fse.copySync('assets', 'dist/assets');
fse.copySync('index.html', 'dist/index.html');

fse.copySync('node_modules/es6-shim/es6-shim.min.js', 'dist/lib/es6-shim.min.js');
fse.copySync('node_modules/angular2/bundles/angular2-polyfills.min.js', 'dist/lib/angular2-polyfills.min.js');
fse.copySync('node_modules/systemjs/dist/system.js', 'dist/lib/system.js');
fse.copySync('node_modules/systemjs/dist/system-polyfills.js', 'dist/lib/system-polyfills.js');
fse.copySync('node_modules/rxjs/bundles/Rx.min.js', 'dist/lib/Rx.min.js');
fse.copySync('node_modules/angular2/bundles/angular2.min.js', 'dist/lib/angular2.min.js');


console.info("package complete...");
