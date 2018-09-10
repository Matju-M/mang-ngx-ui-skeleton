process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
	config.set({
		basePath: "",
		frameworks: ["jasmine", "karma-typescript"],
		files: [
			"node_modules/zone.js/dist/zone.js",
			"node_modules/zone.js/dist/long-stack-trace-zone.js",
			"node_modules/zone.js/dist/proxy.js",
			"node_modules/zone.js/dist/sync-test.js",
			"node_modules/zone.js/dist/jasmine-patch.js",
			"node_modules/zone.js/dist/async-test.js",
			"node_modules/zone.js/dist/fake-async-test.js",

			{ pattern: "node_modules/tslib/**/*.js", included: false, watched: false, served: true },
			{ pattern: "node_modules/@angular/**/*.js", included: false, watched: false, served: true },
			{ pattern: "node_modules/@angular/**/*.js.map", included: false, watched: false, served: true },
			{ pattern: "node_modules/rxjs/**/*.js", included: false, watched: false, served: true },
			{ pattern: "node_modules/rxjs/**/*.js.map", included: false, watched: false, served: true },
			{ pattern: "karma-base.spec.ts" },
			{ pattern: "test/test-setup.spec.ts" },
			{ pattern: "src/**/*.+(ts|html)" }
		],
		preprocessors: {
			"**/*.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			tsconfig: "./tsconfig-test.json",
			bundlerOptions: {
				entrypoints: /\.spec\.ts$/,
				transforms: [
					require("karma-typescript-angular2-transform")
				]
			},
			reports: {
				"text-summary": ""
			},
			logLevel: config.INFO,
			color: true,
			coverageOptions: {
				exclude: /\.(d|spec|test)\.ts/
			}
		},
		reporters: ["progress", "karma-typescript"],
		browsers: ["ChromeHeadless"]
	});
};
