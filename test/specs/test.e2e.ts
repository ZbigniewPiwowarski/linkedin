import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should open home page and accept cookies', async () => {
        await LoginPage.openHome()
        await LoginPage.acceptCookies()
    })
})

