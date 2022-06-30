import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
})

test('Login successfully', async ({ page }) => {
    await loginPage.go()
    await loginPage.linkToLogin()
    await loginPage.welcomeMessage('Welcome, Please Sign In!')
    await loginPage.sigIn('naruto@naruto.com', 'naruto123456')
    await loginPage.userLoggedIn()
})