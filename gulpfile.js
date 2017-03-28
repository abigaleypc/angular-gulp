var gulp = require('gulp');
var minify = require('gulp-minify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('default', ['clean','build', 'webserver', 'watch', 'openbrowser'],function() {
  // 将你的默认的任务代码放在这

});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});



gulp.task('build',['html','js'],function() {
});


gulp.task('html',function() {
    gulp.src('app/*.html') // 匹配 'app/index.html' 并且将 `base` 解析为 `app`
    .pipe(minify())
    .pipe(gulp.dest('build'));  // 写入 'build/index.html'
});

gulp.task('js',function() {
    gulp.src('app/*.js') // 匹配 'app/app.js' 并且将 `base` 解析为 `app`
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));  // 写入 'build/app.js'
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
//   gulp.watch(sourcePaths.styles, ['sass']);
});
