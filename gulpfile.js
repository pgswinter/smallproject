var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jsmin = require('gulp-jsmin'),
	cssminbundle = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	concat = require('gulp-concat'),
	pug = require('gulp-pug')

gulp.task('compress', function (cb) {
	pump([
		gulp.src('./dist/js/*.js'),
		uglify(),
		rename({suffix:'.min'}),
		gulp.dest('./dist/js')
	],
    cb
  );
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('cssminbundle',function(){

	gulp.src('./dist/css/bundle.css')
		.pipe(cssminbundle())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/css'))

})

gulp.task('sass',function(){

	return gulp.src('./src/sass/**/*.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./dist/css'))

})

gulp.task('sass:watch',function(){

	gulp.watch('./src/sass/**/*.sass',['sass'])

})

gulp.task('pug',function(){

	return gulp.src('./pug/**/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./dist'))

})

gulp.task('dev',['sass','sass:watch','cssminbundle','scripts','pug'])
gulp.task('product',['cssminbundle','compress'])
