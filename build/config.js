const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const outputRoot = "./dist";
const sourceRoot = "src";

module.exports = {
    output: {
        root: "./dist",
        components: "./components",
        sass: `${outputRoot}/sass/${pkg.name}`
    },
    src: {
        root: sourceRoot,
        ts: `./${sourceRoot}/**/*.ts`,
        styles: `./${sourceRoot}/**/*.scss`
    },
    buildTarget: "es6",
    packageName: pkg.name
}