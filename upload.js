const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function upload(){

    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get('https://filebin.net/');

    let input = await driver.findElement(By.id("fileField"));

    //form.click();
    await input.sendKeys("C:\\Users\\jrobi\\OneDrive\\Desktop");

    await form.click();
    driver.quit();

}

upload();