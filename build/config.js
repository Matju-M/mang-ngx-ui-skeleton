const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const outputRoot = "./dist";
const sourceRoot = "src";
const artifact = "./.artifact";

module.exports = {
    output: {
        root: `${outputRoot}`,
        ts: `${outputRoot}/`,
        sass: `${outputRoot}/styles/${pkg.name}`,
        json: `${outputRoot}/`,
    },
    src: {
        root: sourceRoot,
        artifact: `${artifact}`,
        artifactJs: `${artifact}/**/*.js`,
        artifactTs: `${artifact}/**/*.ts`,
        ts: `${sourceRoot}/**/*.ts`,
        html: `${sourceRoot}/**/*.html`,
        styles: `${sourceRoot}/**/*.scss`,
        specTs: `${sourceRoot}/**/*.spec.ts`,
    },
    buildTarget: "es6",
    packageName: pkg.name
}