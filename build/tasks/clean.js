var gulp = require('gulp');
var del = require('del');

gulp.task('clean:pre', function () {
    return del([
        "./components",
        "./dist"
    ]);
});

gulp.task('clean:post', function () {
    return del([
        "./components",
    ]);
});