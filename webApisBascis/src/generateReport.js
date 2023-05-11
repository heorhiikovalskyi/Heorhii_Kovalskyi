const reporter = require("cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonFile: "testsResults.json",
  output: "cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
