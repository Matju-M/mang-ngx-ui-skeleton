var gulp = require('gulp');
var del = require('del');

gulp.task('clean:pre', function () {
    return del([
        "./tmp",
        "./dist"
    ]);
});

gulp.task('clean:post', function () {
    return del([
        "./tmp",
    ]);
});