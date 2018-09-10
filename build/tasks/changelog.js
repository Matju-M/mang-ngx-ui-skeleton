const _ = require("lodash");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const conventionalChangelog = require("gulp-conventional-changelog");

const args = require("yargs")
	.option("from")
	.option("to")
	.option("release")
	.option("force")
	.argv;

gulp.task("changelog", () => {

	if (!args.release || !args.release.trim().length) {
		console.log("[CHANGELOG]: Release not defined!");
		throw "--release not defined. Should be dev, rc or stable."
	}
	else if (args.release === "dev" && !args.force) {
		console.log("[CHANGELOG]: skipped since it's a dev release. use --force to generate");
		return;
	}

	const gitRawCommits = {
		// debug: x => console.log("[DEBUG]", x),
		"no-max-parents": true,
	};

	if (args.from) {
		gitRawCommits.from = args.from;
	}

	if (args.to) {
		gitRawCommits.to = args.to;
	}

	let mode = "";
	let tagPrefixRelease = "[^-]$";

	if (args.release.trim() != "stable") {
		tagPrefixRelease = `-${args.release.trim()}`;
		mode = `(${tagPrefixRelease})`;
	}

	const tagPrefix = `\\s*([0-9\\.]{1,10}${tagPrefixRelease})`;
	var rTag = new RegExp(`tag:\\s*([0-9\\.]{1,10}${mode}(.+?))[,)]`, "gi");

	return gulp.src("CHANGELOG.md")
		.pipe(plumber())
		.pipe(conventionalChangelog(
			{
				// debug: console.debug.bind(console),
				preset: "angular",
				tagPrefix,
				transform: (commit, cb) => {
					if (args.release.trim() === "stable") {
						commit.gitTag = "";
						cb(null, commit);
						return;
					}

					if (_.isString(commit.gitTags)) {
						var match = rTag.exec(commit.gitTags);
						rTag.lastIndex = 0;

						if (match) {
							commit.version = match[1];
						}
					}

					cb(null, commit);
				}
			},
			{},
			gitRawCommits
		))
		.pipe(gulp.dest("./"));
});