import { WebDriver, By } from "selenium-webdriver";
import { BasePage } from "./basePage.js";
import { DashboardPage } from "./dashboardPage.js";
export class LoginPage extends BasePage {
  private usernameLocator: By = By.name("username");
  private passwordLocator: By = By.name("password");
  private loginButtonLocator: By = By.className("orangehrm-login-button");
  constructor(driver: WebDriver) {
    super(driver);
  }
  async typeUsername(username: string): Promise<LoginPage> {
    await this.driver.findElement(this.usernameLocator).sendKeys(username);
    return this;
  }
  async typePassword(password: string): Promise<LoginPage> {
    await this.driver.findElement(this.passwordLocator).sendKeys(password);
    return this;
  }
  async submitLogin(): Promise<DashboardPage> {
    await this.driver.findElement(this.loginButtonLocator).submit();
    // await new Promise((resolve) => setTimeout(resolve, 500));
    return new DashboardPage(this.driver);
  }
  async login(username: string, password: string): Promise<DashboardPage> {
    await this.typeUsername(username);
    await this.typePassword(password);
    return this.submitLogin();
  }
}
