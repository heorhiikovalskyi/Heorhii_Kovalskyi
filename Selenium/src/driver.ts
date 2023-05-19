import { Builder, Browser } from "selenium-webdriver";
export const driver = await new Builder().forBrowser(Browser.EDGE).build();
