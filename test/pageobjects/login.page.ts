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


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    public openHome () {
        return super.open('home');
    }

    public acceptCookies () {
        return this.cookieBannerAccept.click();
    }
}

export default new LoginPage();
