import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import nodeResolve from "rollup-plugin-node-resolve-angular";

const globalLibs = {
	"@angular/core": "ng.core",
}

export default {
	input: "./components/index.ts",
	output: {
		file: "./dist/components/index.js",
		format: "umd",
		name: "@mang/ngx-ui-skeleton",
	},
    plugins: [
		typescript({
			tsconfig: "tsconfig-jit.json"
		}),
		cleanup(),
		nodeResolve({
			jsnext: true,
			main: true
		})
	],
	external: Object.keys(globalLibs),
    globals: globalLibs
}
