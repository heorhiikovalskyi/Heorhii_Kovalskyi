//import { BasePage } from "./basePage.js";
import { LoginPage } from "./loginPage.js";
import { WebDriver, until, By } from "selenium-webdriver";
import { DashboardPage } from "./dashboardPage.js";
import { UserManagementPage } from "./userManagementPage.js";
export class PageFactory {
  login(driver: WebDriver): LoginPage {
    return new LoginPage(driver);
  }
  dashboard(driver: WebDriver): DashboardPage {
    return new DashboardPage(driver);
  }
  userManagement(driver: WebDriver): UserManagementPage {
    return new UserManagementPage(driver);
  }
}
