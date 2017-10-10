import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import nodeResolve from "rollup-plugin-node-resolve-angular";

const globalLibs = [
	"@angular/core"
];

export default {
	input: "./tmp/src-inlined/index.ts",
	output: {
		file: "./dist/index.js",
		format: "umd",
		name: "@mang/ngx-ui-skeleton",
	},
    plugins: [
		typescript(),
		cleanup(),
		nodeResolve({
			jsnext: true,
			main: true
		})
	],
	external: globalLibs
}
