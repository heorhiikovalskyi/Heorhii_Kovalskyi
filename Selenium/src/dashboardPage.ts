import { WebDriver, By } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuBar } from "./menuBar";
export class DashboardPage extends BasePage {
  menuBar: MenuBar;
  constructor(driver: WebDriver) {
    super(driver);
    this.menuBar = new MenuBar(driver);
  }
}
