const gulp = require("gulp");
const git = require("gulp-git");
const runSeq = require("run-sequence");

const args = require("yargs")
	.option("remote", { alias: "r" })
	.option("version", { alias: "v" })
	.option("message", { alias: "m" })
	.argv;

let tag = {};
const temporaryOrigin = "origin-temp";

gulp.task("git:tag", () => {
	return runSeq(
		"git:remove:origin",
		"git:add:origin",
		"git:tag:version",
		"git:tag:push:origin",
		"git:remove:origin",
		() => {
			console.log("[TAG]: cleanup")
			tag = {}
		}
	);
});

gulp.task("git:add:origin", cb => {
	if (args.remote) {
		console.log("[TAG]: Added Origin", args.remote)
		git.addRemote(temporaryOrigin, args.remote, err => {
			if (err) throw err;
			cb();
		});
	} else {
		console.log("[TAG]: No remote origin defined");
		cb();
	}
});

gulp.task("git:remove:origin", cb => {
	if (args.remote) {
		git.removeRemote(temporaryOrigin, err => {
			console.log("[ERROR]:", err);
			cb();
		})
	} else {
		console.log("[TAG]: No remote origin defined");
		cb();
	}
})

gulp.task("git:tag:push:origin", cb => {
	if (tag) {
		const origin = args.remote ? temporaryOrigin : "origin";

		console.log("[TAG]: Pushing to ", origin);
		git.push(origin, tag.version, (err) => {
			if (err) {
				throw err;
			}
			cb();
		})
	} else {
		console.log("[TAG]: Tag is undefined");
		cb();
	}
})

gulp.task("git:tag:version", cb => {
	const package = require("../../package.json");

	if (args.version) {
		console.log("[TAG]", args.version)
		tag = {
			version: args.version,
			message: args.message || args.version
		};
	} else {
		console.log("[TAG]: Version in args not specified. Using version specified in package.json.");
		tag = {
			version: package.version,
			message: args.message || package.version
		}
	}

	console.log("[TAG]: Applying tag locally...");
	git.tag(tag.version, tag.message, (err) => {
		if (err) {
			throw err;
		}
		cb();
	});
});
