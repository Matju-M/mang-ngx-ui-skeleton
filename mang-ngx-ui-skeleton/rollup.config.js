import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import nodeResolve from "rollup-plugin-node-resolve-angular";
import CleanCSS from "clean-css";

const globals = {
	"@angular/core": "ng.core",
};

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
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