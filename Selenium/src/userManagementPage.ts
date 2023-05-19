import { WebDriver, By } from "selenium-webdriver";
import { BasePage } from "./basePage.js";
import { MenuBar } from "./menuBar.js";
import { TopbarMenu } from "./topbarMenu.js";
export class UserManagementPage extends BasePage {
  menuBar: MenuBar;
  topbarMenu: TopbarMenu;
  constructor(driver: WebDriver) {
    super(driver);
    this.menuBar = new MenuBar(driver);
    this.topbarMenu = new TopbarMenu(driver);
  }
}
