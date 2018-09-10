const gulp = require("gulp");
const config = require("../config");
const ts = require("gulp-typescript");
const inlineTemplates = require("gulp-inline-ng2-template");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const ngPackage = require("ng-packagr");

const tsProjectJit = ts.createProject("tsconfig-jit.json");

const args = require("yargs").argv;

const INLINE_TEMPLATES = {
    useRelativePaths: true
};

gulp.task("copy:styles", () =>
    gulp.src(config.src.styles)
        .pipe(gulp.dest(config.output.sass))
);

gulp.task("copy:files", () => {
    gulp.src(args.files)
        .pipe(plumber())
        .pipe(gulp.dest(config.output.root))
})

gulp.task("copy:package.json", ()=> 
    gulp.src("package.json")
        .pipe(plumber())
        .pipe(gulp.dest(config.output.json))
);

gulp.task("build:jit:ts", () =>
    gulp.src(config.src.ts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(tsProjectJit())
        .pipe(inlineTemplates(INLINE_TEMPLATES))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.ts))
);

gulp.task("copy:html", () =>
    gulp.src(config.src.html)
        .pipe(gulp.dest(config.src.artifact))
);

gulp.task("build:aot", callback => {
    ngPackage
        .ngPackagr()
        .forProject('package.json')
        .withTsConfig('tsconfig-aot.json')
        .build()
        .then(() => callback())
        .catch(error => {
            console.error(error);
            process.exit(1);
            callback();
        });
});
