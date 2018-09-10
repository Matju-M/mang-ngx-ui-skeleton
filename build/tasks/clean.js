const gulp = require("gulp");
const del = require("del");

gulp.task("clean:post-build", function () {
    return del([
        "./.artifact"
    ]);
});
