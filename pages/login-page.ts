import { expect, Locator, Page } from '@playwright/test'


export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://demo.nopcommerce.com/');
        const title = this.page.locator('.topic-block-title')
        await expect(title).toHaveText('Welcome to our store')
    }

    async linkToLogin() {
        const linkToLogin = this.page.locator('.ico-login')
        await expect(linkToLogin).toHaveText('Log in')
        await linkToLogin.click()
    }

    async sigIn(user: string, password: string) {
        await this.page.fill('input[id=Email]', user)
        await this.page.fill('input[id=Password]', password)
        await this.page.click('button >> text=Log in')
    }

    async userLoggedIn() {
        const modalMessage = this.page.locator('.ico-logout')
        await expect(modalMessage).toHaveText('Log out')
    }

    async welcomeMessage(target: string) {
        const welcomeMessage = this.page.locator('.page-title')
        await expect(welcomeMessage).toHaveText(target)
    }

}