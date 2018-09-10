const gulp = require("gulp");
const runSeq = require("run-sequence");

const config = require("../config");

gulp.task("watch", () => {
    gulp.watch([config.src.ts, config.src.html, config.src.styles], () => {
        return runSeq(
            "copy:html",
            "copy:styles",
            "build:jit:ts"
        );
    })
        .on("change", reportChange)
        .on("error", swallowError);
});

function reportChange(event) {
    console.log(`File ${event.path} was ${event.type}, running tasks...`);
}

function swallowError(error) {
    console.log(util.colors.red("Error occurred while running watched task...", error));
}
