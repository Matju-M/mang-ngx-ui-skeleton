const gulp = require("gulp");
const config = require("./config");

require("require-dir")("./tasks");

gulp.task("build:local", ["copy:html", "build:jit:ts", "copy:files"]);

gulp.task("build:dev", ["copy:html", "build:aot:ts", "copy:files"]);

gulp.task("build:prod", ["build:aot", "copy:styles", "copy:files"]);

gulp.task("prepare", ["copy:styles"]);

gulp.task("install", ["install:peers"]);

gulp.task("release", ["changelog", "git:tag"]);

gulp.task("default", () => console.log(`======== ${config.packageName} ========`));