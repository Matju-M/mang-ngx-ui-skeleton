import nodeResolve from "rollup-plugin-node-resolve-angular";
import { name } from "./package.json";

export default {
	input: "./dist/index.js",
	output: {
		file: `./dist/index.umd.js`,
		format: "umd",
		name
	},
	plugins: [
		nodeResolve({
			jsnext: true,
			main: true
		})
	],
	external: id => !id.match(/(\.|:)/),
	onwarn: warning => {
		const code = warning.code;
		if (code !== "UNRESOLVED_IMPORT" && code !== "MISSING_GLOBAL_NAME") {
			console.warn(warning.message);
		}
	}
}
