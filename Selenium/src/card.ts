import { WebDriver, By, WebElement } from "selenium-webdriver";
export class Card {
  updateLocator = By.css("i.oxd-icon.bi-pencil-fill");
  deleteLocator = By.css("i.oxd-icon.bi-trash");
  titleLocator = By.css("div.data");
  constructor() {}
  async getTitle(card: WebElement): Promise<string> {
    const title = await card.findElement(this.titleLocator).getText();
    return title;
  }
  async getDeleteButton(card: WebElement): Promise<WebElement> {
    const deleteButton = await card.findElement(this.deleteLocator);
    return deleteButton;
  }
}
