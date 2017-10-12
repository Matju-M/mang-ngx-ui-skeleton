const gulp = require('gulp');
const config = require("./config");

require("require-dir")("./tasks");

gulp.task("prepare", ["copy:styles", "inline:templates"]);

gulp.task('default', () => console.log(`======== ${config.packageName} ========`));
