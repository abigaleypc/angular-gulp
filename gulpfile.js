const gulp = require('gulp');
const rimraf = require('rimraf');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

gulp.task('clean', cb => {
    rimraf('./build', cb);
});

gulp.task('htmlmin', () => {
    gulp.src('./app/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('script', () => {
    gulp.src(['./app/*.js', './app/**/*.js'])
        .pipe(babel({
            presets: ['es2015', 'stage-0']
        }))
        // .pipe(uglify()) // 生产模式
        .pipe(sourcemaps.write('.'))    // 开发模式
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
});

gulp.task('style', () => {
    gulp.src(['./app/*.less', './app/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['./app/index.html']).on('change', browserSync.reload);
});

gulp.task('watch', () => {
    gulp.watch(['./app/index.html'], ['htmlmin']);
    gulp.watch(['./app/**/*.js'], ['script']);
    gulp.watch(['./app/**/*.less'], ['style']);
});

gulp.task('default', ['clean', 'style', 'script', 'htmlmin', 'serve'], () => {
    gulp.start('watch');
});
