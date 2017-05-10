var gulp = require('gulp'),
	connect = require('gulp-connect'),
	open = require('gulp-open'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	concatcss = require('gulp-concat-css'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-cssmin'),
	jsmin = require('gulp-jsmin'),
	merge = require('merge-stream'),
	minify = require('gulp-minify-css'),
	sourcemaps = require('gulp-sourcemaps'),
	cssminbundle = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	cleanCSS = require('gulp-clean-css'),
	port = process.env.port || 3031


gulp.task('jsmin',function(){

	gulp.src('./AMARIS CAREER/src/**/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./AMARIS CAREER/dist'))

})

gulp.task('cssmin',function(){


	gulp.src(['.dist/css/**/*.css','!.dist/css/**/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('.dist/css/'))


})

gulp.task('cssminbundle',function(){

	gulp.src('.dist/css/bundle.css')
		.pipe(cssminbundle())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('.dist/css'))

})

gulp.task('sass',function(){

	return gulp.src('.src/sass/**/*.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('.dist/css'))

})

gulp.task('sass:watch',function(){

	gulp.watch('.src/sass/**/*.sass',['sass'])

})

gulp.task('rftcss',['sass','sass:watch','cssminbundle'])
