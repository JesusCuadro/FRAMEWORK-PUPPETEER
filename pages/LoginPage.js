import BasePage from './BasePage'

export default class LoginPage extends BasePage {
	constructor() {
		super()
		this.navButton = '#app > div > header > div > div:nth-child(2) > ul > li > button'
		this.inputEmail = '#login > div:nth-child(1) > input'
		this.inputPassword = '#login > div:nth-child(2) > input'
		this.submitButton =
			'#app > div > section.Login__login___3HOEm > div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0 > div > nav > button.theme__button___1iKuo.LoginButton__button___1Sd3Q.theme__raised___ONZv6.LoginButton__raised___1fUxJ.theme__primary___2NhN1.LoginButton__primary___38GOe'
		this.loginPageText =
			'#app > div > header > div > div:nth-child(2) > ul > div > button > span:nth-child(1)'
	}

	async visit() {
		await page.goto('https://demo.testim.io/')
		await page.waitForSelector(this.navButton)
		await page.click(this.navButton)
		const url = this.getUrl()
		console.log(url)
	}

	async login(email, password) {
		await page.waitForSelector(this.inputEmail)
		await page.waitForSelector(this.inputPassword)
		await this.type(this.inputEmail, email)
		await this.type(this.inputPassword, password)
		await this.click(this.submitButton)
	}

	async validateLogin() {
		await page.waitForSelector(this.loginPageText)
	}
}
