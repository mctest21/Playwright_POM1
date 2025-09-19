const { expect } = require("@playwright/test")

class LoginPage {
    constructor(page) {
        this.page = page
        this.header = "//h2[normalize-space()='Sign In']"
        this.username = '#email1';
        this.password = '#password1';
        this.loginbutton = 'button:has-text("Sign in")';

    }

    async loginToApplication(uname, pwd) {
        await this.page.fill(this.username, uname)
        await this.page.fill(this.password, pwd)
        await this.page.click(this.loginbutton)
    }
    async verifySignIn() {
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports = LoginPage