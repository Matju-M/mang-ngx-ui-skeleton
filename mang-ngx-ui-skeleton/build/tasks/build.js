const gulp = require("gulp");
const config = require("../config");

gulp.task("copy:styles", () => {
    return gulp.src(config.src.styles)
        .pipe(gulp.dest(config.output.sass))
});