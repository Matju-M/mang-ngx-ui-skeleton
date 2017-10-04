module.exports = function (config) {
	config.set({
		frameworks: ["jasmine", "karma-typescript"],
		files: [
			{ pattern: "base.spec.ts" },
			{ pattern: "src/**/*.+(ts|html)" }
		],
		preprocessors: {
			"**/*.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			bundlerOptions: {
				entrypoints: /\.spec\.ts$/,
				transforms: [
					require("karma-typescript-angular2-transform")
				]
			},
			compilerOptions: {
				lib: ["es2015", "dom"]
			},
			reports: {
				"text-summary": ""
			}
		},
		reporters: ["progress", "karma-typescript"],
		browsers: ["PhantomJS"],
		phantomjsLauncher: {
			exitOnResourceError: true
		}
	});
};
