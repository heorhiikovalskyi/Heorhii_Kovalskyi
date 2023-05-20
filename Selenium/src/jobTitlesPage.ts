import { WebDriver, By, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuBar } from "./menuBar";
import { TopbarMenu } from "./topbarMenu";
import { SaveJobPage } from "./saveJobPage";
import { PageFactory } from "./pageFactory";
export class JobTitlesPage extends BasePage {
  menuBar: MenuBar;
  topbarMenu: TopbarMenu;
  private addLocator: By = By.css("button.oxd-button.oxd-button--medium.oxd-button--secondary");
  private jobs = {
    updateLocator: By.css("i.oxd-icon.bi-pencil-fill"),
    deleteLocator: By.css("i.oxd-icon.bi-trash"),
    titleLocator: By.css("div.data"),
  };
  private jobsLocator: By = By.css(".oxd-table-card");
  private deleteNotification = {
    deleteLocator: By.css("button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin"),
    cancelLocator: By.css("button.oxd-button oxd-button--medium oxd-button--text orangehrm-button-margin"),
  };
  constructor(driver: WebDriver) {
    super(driver);
    this.menuBar = new MenuBar(driver);
    this.topbarMenu = new TopbarMenu(driver);
  }
  async add(): Promise<SaveJobPage> {
    await this.driver.findElement(this.addLocator).click();
    const pageFactory = PageFactory.getInstance();
    return pageFactory.saveJob(this.driver);
  }
  async getJobs(): Promise<WebElement[]> {
    const jobs = await this.driver.findElements(this.jobsLocator);
    return jobs;
  }
  async deleteJob(job: WebElement): Promise<JobTitlesPage> {
    const deleteButton = await job.findElement(this.jobs.deleteLocator);
    await deleteButton.click();
    await this.driver.findElement(this.deleteNotification.deleteLocator).click();
    return this;
  }
}
