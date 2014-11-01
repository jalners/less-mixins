var gulp = require('gulp'),
	concat = require('gulp-concat'),
	header = require('gulp-header'),
	watch = require('gulp-watch');

var pkg = require('./package.json');

var banner = ['/**',
' * <%= pkg.description %>',
' * Version v<%= pkg.version %>',
' * Copyright 2014 <%= pkg.author %>',
' * Licensed under the <%= pkg.license %> license',
' */',
'',
''].join('\n');

gulp.task('concat', function () {
	gulp.src(['./src/!(common)*.less', './src/common.less'])
		.pipe(concat('mixins.less'))
		.pipe(header(banner, { pkg : pkg }))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch('./src/*.less', ['concat']);
});

gulp.task('default', ['concat', 'watch']);