var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('test', ['webpack'], function() {
    // 将你的默认的任务代码放在这
    gulp.run('ftp');
});

gulp.task('webpack', function(callback) {
    console.log('start');
    var myConfig = Object.create(webpackConfig);
    webpack(
        myConfig,
        function(err, stats) {
            console.log('end');
            callback();
        });
});

gulp.task('ftp', function() {
    return gulp.src('./{pages,bundle}/**')
        .pipe(ftp({
            host: '121.41.9.177',
            port: 21,
            user: 'wqs',
            pass: 'q'
        }))
        .pipe(gutil.noop());
});