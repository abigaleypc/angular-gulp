var gulp = require('gulp');
var minify = require('gulp-minify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
// var webserver = require('gulp-webserver');
const path = require('path');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('default', ['clean'],function() {
  gulp.start(['build', 'browser-sync', 'watch']);
  // 将你的默认的任务代码放在这

});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('build',['html','js'],function() {
});


gulp.task('html',function() {
    gulp.src('app/*.html') // 匹配 'app/index.html' 并且将 `base` 解析为 `app`
    .pipe(minify())
    .pipe(gulp.dest(path.join(__dirname, 'build')));  // 写入 'build/index.html'
});

gulp.task('js',function() {
   

    gulp.src('app/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.join(__dirname, 'build')));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function(){
});
