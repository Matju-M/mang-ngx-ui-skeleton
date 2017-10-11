const gulp = require('gulp');
const config = require("./config");
const runSeq = require("run-sequence");

require("require-dir")("./tasks");

gulp.task("prepare", (cb) => {
    return runSeq(["copy:styles", "inline:templates"], cb)
});


gulp.task('default', () => console.log(`======== ${config.packageName} ========`));
