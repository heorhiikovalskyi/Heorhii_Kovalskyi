let common = [
  "./src/features/**/*.feature",
  "--require-module ts-node/register", //typescript cucumber
  "--require ./src/features/step_definitions/**/*.ts",
  "--format progress-bar",
  "--publish-quiet",
  `--format-options '{"snippetInterface": "synchronous"}'`,
  "--format json:testsResults.json",
].join(" ");

module.exports = {
  default: common,
};
