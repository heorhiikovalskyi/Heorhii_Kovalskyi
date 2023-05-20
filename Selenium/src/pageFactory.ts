//import { BasePage } from "./basePage.js";
import { LoginPage } from "./loginPage";
import { WebDriver, until, By } from "selenium-webdriver";
import { DashboardPage } from "./dashboardPage";
import { UserManagementPage } from "./userManagementPage";
import { JobTitlesPage } from "./jobTitlesPage";
import { SaveJobPage } from "./saveJobPage";
export class PageFactory {
  private constructor() {}
  private static instance: PageFactory;
  public static getInstance(): PageFactory {
    if (!PageFactory.instance) {
      PageFactory.instance = new PageFactory();
    }
    return PageFactory.instance;
  }
  login(driver: WebDriver): LoginPage {
    return new LoginPage(driver);
  }
  dashboard(driver: WebDriver): DashboardPage {
    return new DashboardPage(driver);
  }
  userManagement(driver: WebDriver): UserManagementPage {
    return new UserManagementPage(driver);
  }
  jobTitles(driver: WebDriver): JobTitlesPage {
    return new JobTitlesPage(driver);
  }
  saveJob(driver: WebDriver): SaveJobPage {
    return new SaveJobPage(driver);
  }
}
