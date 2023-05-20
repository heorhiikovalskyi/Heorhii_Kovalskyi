import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { PageFactory } from "../../pageFactory";
import { driver } from "../../driver";
import "dotenv/config";
const pageFactory = PageFactory.getInstance();
Given("I delete job", { timeout: 2 * 50000 }, async function () {
  const jobTitlesPage = pageFactory.jobTitles(driver);
  let jobs = await jobTitlesPage.getJobs();
  for (let job of jobs) {
    const jobTitle = await jobTitlesPage.card.getTitle(job);
    if (jobTitle === "someJob3") {
      await jobTitlesPage.deleteJob(job);
      break;
    }
  }
});

Then("there is no deleted job", { timeout: 2 * 50000 }, async function () {
  const jobTitlesPage = pageFactory.jobTitles(driver);
  let foundJob = null;
  for (let job of this.jobs) {
    const jobTitle = await jobTitlesPage.card.getTitle(job);
    if (jobTitle === "someJob3") {
      foundJob = job;
      break;
    }
  }
  assert.equal(foundJob, null);
});
