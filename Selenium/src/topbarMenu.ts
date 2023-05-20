import { WebDriver, until } from "selenium-webdriver";
import { By } from "selenium-webdriver";
import { JobTitlesPage } from "./jobTitlesPage";
import { PageFactory } from "./pageFactory";
export class TopbarMenu {
  private driver: WebDriver;
  //private jobLocator: By = By.css("li.oxd-topbar-body-nav-tab");
  private jobLocator: By = By.xpath("//*[text()='Job ']");
  private jobList = { "Job Titles": By.xpath("//*[text()='Job Titles']") };
  //userManagementLocator=...
  //userManagementList=...
  //organizationLocator=...
  //organizationList=...
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async job(): Promise<TopbarMenu> {
    await this.driver.findElement(this.jobLocator).click();
    return this;
  }
  async jobTitles(): Promise<JobTitlesPage> {
    await this.driver.wait(until.elementLocated(this.jobLocator));
    await this.job();
    await this.driver.findElement(this.jobList["Job Titles"]).click();
    const pageFactory = PageFactory.getInstance();
    return pageFactory.jobTitles(this.driver);
  }
}
