import { WebDriver, By } from "selenium-webdriver";
import { BasePage } from "./basePage.js";
import { MenuBar } from "./menuBar.js";
import { TopbarMenu } from "./topbarMenu.js";
import { JobTitlesPage } from "./jobTitlesPage.js";
export class SaveJobPage extends BasePage {
  menuBar: MenuBar;
  topbarMenu: TopbarMenu;
  jobTitleLocator: By = By.xpath(
    '//div[@class="orangehrm-card-container"]//input[@class="oxd-input oxd-input--active"]'
  );
  jobDescriptionLocator: By = By.css('textarea[placeholder="Type description here"]');
  notesLocator: By = By.css('textarea[placeholder="Add note"]');
  saveLocator: By = By.css("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space");

  constructor(driver: WebDriver) {
    super(driver);
    this.menuBar = new MenuBar(driver);
    this.topbarMenu = new TopbarMenu(driver);
  }
  async typeTitle(title: string): Promise<SaveJobPage> {
    await this.driver.findElement(this.jobTitleLocator).sendKeys(title);
    return this;
  }
  async typeDescription(description: string): Promise<SaveJobPage> {
    await this.driver.findElement(this.jobDescriptionLocator).sendKeys(description);
    return this;
  }
  async typeNotes(notes: string): Promise<SaveJobPage> {
    await this.driver.findElement(this.notesLocator).sendKeys(notes);
    return this;
  }
  async submit(): Promise<JobTitlesPage> {
    await this.driver.findElement(this.saveLocator).submit();
    return new JobTitlesPage(this.driver);
  }
  async addJob(title: string, description: string, notes: string): Promise<JobTitlesPage> {
    await this.typeTitle(title);
    await this.typeDescription(description);
    await this.typeNotes(notes);
    return await this.submit();
  }
}
