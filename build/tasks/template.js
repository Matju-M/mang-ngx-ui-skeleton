const gulp = require("gulp");
const inlineTemplates = require("gulp-inline-ng2-template");
const config = require("../config");

const INLINE_TEMPLATES = {
    src: config.src.ts,
    dist: `${config.output.components}/`,
    config: {
      base: config.src.root,
      target: config.buildTarget,
      useRelativePaths: true
    }
  };

  gulp.task('inline:templates', () => {
    return gulp.src(INLINE_TEMPLATES.src)
      .pipe(inlineTemplates(INLINE_TEMPLATES.config))
      .pipe(gulp.dest(INLINE_TEMPLATES.dist));
  });