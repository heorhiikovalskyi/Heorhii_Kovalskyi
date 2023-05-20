import { WebDriver, By } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuBar } from "./menuBar";
import { TopbarMenu } from "./topbarMenu";
export class UserManagementPage extends BasePage {
  menuBar: MenuBar;
  topbarMenu: TopbarMenu;
  constructor(driver: WebDriver) {
    super(driver);
    this.menuBar = new MenuBar(driver);
    this.topbarMenu = new TopbarMenu(driver);
  }
}
