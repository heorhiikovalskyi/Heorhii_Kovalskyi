import { WebDriver } from "selenium-webdriver";
export class BasePage {
  protected driver: WebDriver;
  constructor(private readonly webDriver: WebDriver) {
    this.driver = this.webDriver;
  }
}
