const gulp = require("gulp");
const exec = require("child_process").exec;

gulp.task("install:peers", callback => {
	const package = require("../../package.json");
	const peers = Object.entries(package.peerDependencies || {})
		.map(d => d.join('@')).join(' ');

	console.log(`installing ....${Object.entries(package.peerDependencies || {}).length} peer deps.`);

	exec(`yarn add --peer --no-lockfile --ignore-scripts ${peers}`, function (error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(error);
	});
});
