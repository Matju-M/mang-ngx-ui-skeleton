import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import angular from "rollup-plugin-angular-aot";
import nodeResolve from "rollup-plugin-node-resolve-angular";
import sass from "node-sass";
import CleanCSS from "clean-css";

import {
    minify as minifyHtml
} from "html-minifier";

const globals = {
	"@angular/core": "ng.core",
};

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

const angularAotPreprocessors = {
    preprocessors: {
        template: template => minifyHtml(template, htmlminOpts),

        // This will be used when StyleUrls is specified.The problem will be with styling.
        style: source => {
            const css = sass.renderSync({
                data: source
            }).css;
            return cssmin.minify(css).styles;
        }
    }
};

export default {
    entry: "./src/index.ts",
    dest: "./dist/index.js",
    format: "umd",
    exports: "named",
    moduleName: "@mang/ngx-ui-skeleton",
    plugins: [
        typescript(),
        cleanup(),
        nodeResolve({
            jsnext: true,
            main: true
		})
    ],
    external: Object.keys(globals),
    onwarn: () => {
        return
    }
}