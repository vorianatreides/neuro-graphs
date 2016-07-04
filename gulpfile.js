var gulp 				= require('gulp');
var clean 			= require('gulp-clean');
var mocha 			= require('gulp-mocha');
var ts 					= require('gulp-typescript');
var tdoc 				= require("gulp-typedoc");
var concat			= require('gulp-concat');
var merge 			= require('merge2');
var webpack 		= require('webpack-stream');
var uglify 			= require('gulp-uglify');
var rename 			= require('gulp-rename');
var istanbul 		= require('gulp-istanbul');


//----------------------------
// PATHS
//----------------------------
var paths = {
	javascripts: ['src/**/*.js', 'test/**/*.js'],
	typescripts: ['src/**/*.ts', 'test/**/*.ts'],
	typesources: ['src/**/*.ts'],
	distsources: ['src/**/*.ts'],
	clean: ['src/**/*.js', 'test/**/*.js', 'build', 'dist', 'docs'],
	tests: ['test/**/*.js']
};

var tsProject = ts.createProject({
	target: "ES5",
	module: "commonjs",
	declaration: false,
	noExternalResolve: false
});

//----------------------------
// TASKS
//----------------------------
gulp.task('build', function () {
	return gulp.src(paths.typescripts, {base: "."})
						 .pipe(ts(tsProject))
						 .pipe(gulp.dest('.'));						
});

// Packaging - Node / Commonjs
gulp.task('dist', ['clean', 'tdoc'], function () {
	var tsResult = gulp.src(paths.distsources)
						 				 .pipe(ts(tsProject))
											
	// Merge the two output streams, so this task is finished  
	// when the IO of both operations are done.
	return merge([ 
		// tsResult.dts.pipe(concat('graphinius.d.ts'))
		// 						.pipe(gulp.dest('.')),		
		tsResult.js.pipe(gulp.dest('./dist/'))
	]);
});


// Packaging - Webpack
gulp.task('pack', ['dist'], function() {
	return gulp.src('./index.js')
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('build/'));
});


// Uglification...
gulp.task('bundle', ['pack'], function() {
	return gulp.src('build/neuro-graphs.js')
		.pipe(uglify())
		.pipe(rename('neuro-graphs.min.js'))
		.pipe(gulp.dest('build'));
});


// Documentation (type doc)
gulp.task("tdoc", function() {
    return gulp
        .src(paths.typesources)
        .pipe(tdoc({
            module: "commonjs",
            target: "es5",
            out: "docs/",
            name: "Graphinius"//,
						// theme: "minimal"
        }))
    ;
});


gulp.task('test', ['build'], function () {
	return gulp.src(paths.tests, {read: false})
						 .pipe(mocha({reporter: 'nyan',
						 							timeout: 5000}));
});

gulp.task('clean', function () {
	return gulp.src(paths.clean, {read: false})
						 .pipe(clean());
});

gulp.task('watch', function () {
	gulp.watch(paths.typescripts, ['test']);
});


gulp.task('default', ['watch']);
