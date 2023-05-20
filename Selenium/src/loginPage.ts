import { WebDriver, By, until } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { DashboardPage } from "./dashboardPage";
import { PageFactory } from "./pageFactory";

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
    const pageFactory = PageFactory.getInstance();
    return pageFactory.dashboard(this.driver);
  }
  async login(username: string, password: string): Promise<DashboardPage> {
    await this.driver.wait(until.elementLocated(this.usernameLocator));
    await this.typeUsername(username);
    await this.typePassword(password);
    return this.submitLogin();
  }
}
