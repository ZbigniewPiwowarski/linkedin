import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/cookies.js'
import * as assert from "assert";


describe('Cookies tests', () => {
    it('should open home page and check cookies policy link', async () => {
       await LoginPage.openHome()
       await LoginPage.clickCookiePolicyLink()

       await expect(LoginPage.cookiePolicyLinkTextH1).toBeDisplayed()
    })

    // This test check if cookies settings toglle works
    it('should switch on cookies permission in cookies settings and check if cookies banner is not diplayed', async () => {
        await LoginPage.openHome()
        await LoginPage.clickCookieSettingsLink()

        await LoginPage.clickCookieToggle()

        await LoginPage.openHome()
        await LoginPage.waitForWebPageToLoad()
        await assert.strictEqual(await (LoginPage.cookieBannerAccept).isDisplayed(), false, "Cokkies banner is still displayed after switching it off")
     })
})
