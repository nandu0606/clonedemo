const {Builder,By,until} = require("selenium-webdriver");
const assert = require("assert");
async function Login(){
	try{
		const driver = new Builder().forBrowser("chrome").build();
		await driver.get("file:///home/mvsr/seledemo/login.html");
		await driver.findElement(By.id("un")).sendKeys("MVSR");
		await driver.findElement(By.id("pwd")).sendKeys("ITD");
		await driver.findElement(By.id("sub")).click();
		const title = await driver.getTitle();
		assert.strictEqual(title,"Login Page");
		console.log("Success");
	}
	finally{
		await driver.quit();
	}
}
Login()

