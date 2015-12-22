console.info("bundling...");


var Builder = require('systemjs-builder');
var builder = new Builder();


builder.config({
	meta: {
		'angular2/platform/browser': {
			build: false
		},
		'angular2/core': {
			build: false
		}
	},
	map: {
		boot: 'app/boot'
	},
	paths: {
		"*": "*.js",
		"angular2/*" : "node_modules/angular2/*.js",
		"rxjs/*" : "node_modules/rxjs/*.js",
	}
});


builder
	//.buildStatic('boot', 'dist/dform.js', { format: 'cjs' })
	.bundle('boot', 'dist/dform.js', { format: 'cjs' })

	.then(function () {
		console.log('bundle complete');
	})

	.catch(function (err) {
		console.error(err);
	})
;


console.info("bundle complete");