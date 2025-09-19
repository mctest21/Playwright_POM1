const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/loginpage")
const HomePage = require("../pages/homepage")

test('Login To Application Using POM', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication("admin@email.com", "admin@123")
    const homePage = new HomePage(page)
    await homePage.logoutFromApplication()
    await homePage.verifyManageOption()
    await loginPage.verifySignIn()
});