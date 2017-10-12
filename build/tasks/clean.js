var gulp = require('gulp');
var del = require('del');

gulp.task('clean:post-build', function () {
    return del([
        "./components",
    ]);
});
