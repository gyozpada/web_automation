const { Builder, Key, By } = require("selenium-webdriver")
require('chromedriver')

async function scrapeYoutube(){

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.youtube.com/@The_FirstTake/featured');

    var link = await driver.findElements(By.tagName("a"))

    for(let link of links){
        console.log(await link.getText());
    }

    var line = await driver.findElement(By.partialLinkText("YOASOBI"));
    console.log(await line.getText());
    driver.quit();

}

scrapeYoutube();
