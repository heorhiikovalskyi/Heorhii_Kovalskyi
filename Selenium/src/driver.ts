import { Builder, Browser } from "selenium-webdriver";
export const driver = new Builder().forBrowser(Browser.EDGE).build();
