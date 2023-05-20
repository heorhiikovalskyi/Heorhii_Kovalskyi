import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { PageFactory } from "../../pageFactory";
import { driver } from "../../driver";
import { wait } from "../../waitForPageLoad";
import { By } from "selenium-webdriver";
import "dotenv/config";
const { USERNAME_, PASSWORD, LOGIN_ENDPOINT } = process.env;
const pageFactory = PageFactory.getInstance();
Given("I add new job", { timeout: 2 * 50000 }, async function () {
  await driver.get(LOGIN_ENDPOINT!);
  await wait(1500);
  const loginPage = pageFactory.login(driver);
  const dashboardPage = await loginPage.login(USERNAME_!, PASSWORD!);
  await wait(2000);
  const userManagementPage = await dashboardPage.menuBar.admin();
  await wait(2000);
  const jobTitlesPage = await userManagementPage.topbarMenu.jobTitles();
  await wait(2000);
  const SaveJobPage = await jobTitlesPage.add();
  await wait(2000);
  await SaveJobPage.addJob("someJob3", "good job", "some notes");
  await wait(5000);
});

When("check available jobs", { timeout: 2 * 50000 }, async function () {
  const jobTitlesPage = pageFactory.jobTitles(driver);
  this.jobs = await jobTitlesPage.getJobs();
});

Then("there is added job", { timeout: 2 * 50000 }, async function () {
  let foundJob = null;
  for (let job of this.jobs) {
    const jobTitle = await job.findElement(By.css("div.data")).getText();
    if (jobTitle === "someJob3") {
      foundJob = job;
      break;
    }
  }
  assert.notEqual(foundJob, null);
});
