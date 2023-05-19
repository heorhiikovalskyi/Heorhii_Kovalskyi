import { LoginPage } from "./loginPage.js";
import { driver } from "./driver.js";
import { By, until } from "selenium-webdriver";
import "dotenv/config";
const { USERNAME_, PASSWORD, LOGIN_ENDPOINT } = process.env;
await driver.get(LOGIN_ENDPOINT!);
await new Promise((resolve) => setTimeout(resolve, 1500));
const page = new LoginPage(driver);
const dashboard = await page.login(USERNAME_!, PASSWORD!);
await new Promise((resolve) => setTimeout(resolve, 2000));
const userManagementPage = await dashboard.menuBar.admin();
await new Promise((resolve) => setTimeout(resolve, 2000));
const jobTitlesPage = await userManagementPage.topbarMenu.jobTitles();
await new Promise((resolve) => setTimeout(resolve, 2000));
const SaveJobPage = await jobTitlesPage.add();
await new Promise((resolve) => setTimeout(resolve, 2000));
await SaveJobPage.addJob("someJob3", "good job", "some notes");
await new Promise((resolve) => setTimeout(resolve, 5000));
let jobs = await jobTitlesPage.getJobs();
for (let job of jobs) {
  const jobTitle = await job.findElement(By.css("div.data")).getText();
  console.log(jobTitle);
  if (jobTitle === "someJob3") {
    await jobTitlesPage.deleteJob(job);
    break;
  }
}
await new Promise((resolve) => setTimeout(resolve, 2000));
jobs = await jobTitlesPage.getJobs();
for (let job of jobs) {
  const jobTitle = await job.findElement(By.css("div.data")).getText();
  console.log(jobTitle);
  if (jobTitle === "someJob3") {
    console.log("test failed");
  }
}
