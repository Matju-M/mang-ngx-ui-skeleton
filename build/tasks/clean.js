var gulp = require('gulp');
var del = require('del');

gulp.task('clean:post', function () {
    return del([
        "./components",
    ]);
});
