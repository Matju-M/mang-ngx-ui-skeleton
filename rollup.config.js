import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import nodeResolve from "rollup-plugin-node-resolve-angular";

const globals = {
    "@angular/core": "ng.core"
};

export default {
    entry: "./components/index.ts",
    dest: "./dist/components/index.js",
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