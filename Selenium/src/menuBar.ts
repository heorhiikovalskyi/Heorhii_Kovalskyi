import { WebDriver } from "selenium-webdriver";
import { By } from "selenium-webdriver";
import { UserManagementPage } from "./userManagementPage.js";
export class MenuBar {
  private driver: WebDriver;
  //private adminLocator: By = By.css("span.oxd-main-menu-item--name");
  private adminLocator: By = By.css('a[href$="/viewAdminModule"]');
  //pimLocator
  //leaveLocator
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async admin(): Promise<UserManagementPage> {
    await this.driver.findElement(this.adminLocator).click();
    return new UserManagementPage(this.driver);
  }
}
