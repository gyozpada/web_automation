const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com/")

    await driver.findElement(By.partialLinkText("Sign in")).click();

    console.log(await driver.getTitle());

    if(await driver.getTitle() === "Sign to Github . Github"){
        console.log("Test #1 Success")
    } else {
        console.log("Test #1 Failed");
    }

    await driver.findElement(By.name("login")).sendKeys("ThisTextInUsernameBox");
    await driver.findElement(By.name("password")).sendKeys("**********", Key.RETURN);

    if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
        console.log("Test #2 Success");
    } else {
        console.log("Test #2 Failed");
    }

    setInterval(function(){
        driver.quit();
    }, 10000)
}