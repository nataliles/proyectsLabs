import basePage from "../basePage"
import { ChainablePromiseElement } from 'webdriverio';
       /* heredando, es necesario para el pageobjets */
/**
* book store page object containing all methods, selectors and functionality
* that is shared across all page objects in this module
*/
export default class bookStoreBasePage extends basePage{
    /**
    Locator to identify username logged in
    */                                          /* la respuesta del user */
    public get usernameLabel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#userName-value');
    }
            /*  */
    public get logoutButton():ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button#submit')
    }
      /* método, debe ser asincrono y se espera una respuesta */
    public async clickLogout(): Promise<void> {
        await this.logoutButton.scrollIntoView()
        await this.logoutButton.click()
    }
};