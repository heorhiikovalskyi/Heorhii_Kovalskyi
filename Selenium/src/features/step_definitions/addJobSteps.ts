import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { PageFactory } from "../../pageFactory";
import { driver } from "../../driver";

import "dotenv/config";
const { USERNAME_, PASSWORD, LOGIN_ENDPOINT } = process.env;
const pageFactory = PageFactory.getInstance();
Given("I add new job", { timeout: 2 * 50000 }, async function () {
  await driver.get(LOGIN_ENDPOINT!);
  const loginPage = pageFactory.login(driver);
  const dashboardPage = await loginPage.login(USERNAME_!, PASSWORD!);
  const userManagementPage = await dashboardPage.menuBar.admin();
  const jobTitlesPage = await userManagementPage.topbarMenu.jobTitles();
  const SaveJobPage = await jobTitlesPage.add();
  await SaveJobPage.addJob("someJob3", "good job", "some notes");
});

When("check available jobs", { timeout: 2 * 50000 }, async function () {
  const jobTitlesPage = pageFactory.jobTitles(driver);
  this.jobs = await jobTitlesPage.getJobs();
});

Then("there is added job", { timeout: 2 * 50000 }, async function () {
  const jobTitlesPage = pageFactory.jobTitles(driver);
  let foundJob = null;
  for (let job of this.jobs) {
    const jobTitle = await jobTitlesPage.card.getTitle(job);
    if (jobTitle === "someJob3") {
      foundJob = job;
      break;
    }
  }
  assert.notEqual(foundJob, null);
});
