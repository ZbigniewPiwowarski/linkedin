import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get cookieBannerAccept () {
        return $('button[data-control-name="ga-cookie.consent.accept.v4"]');
    }

    public get cookiePolicyLink () {
        return $('a[data-tracking-control-name="global-alerts-alert-link-cta"]');
    }

    public get cookiePolicyLinkTextH1 () {
        return $('h1=Cookie Policy');
    }

    public get cookieSettingsLink () {
        return $('a=settings');
    }

    public get cookieToggle () {
        return $('#ember7')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    public openHome () {
        return super.open();
    }

    public clickCookiePolicyLink () {
        return this.cookiePolicyLink.click();
    }

    public clickCookieSettingsLink () {
        return this.cookieSettingsLink.click();
    }

    public clickCookieToggle () {
        return this.cookieToggle.click();
    }

    public acceptCookies () {
        return this.cookieBannerAccept.click();
    }

    public waitForWebPageToLoad(){
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Webpage was not fully loaded'
            }
          );
    }
}

export default new LoginPage();