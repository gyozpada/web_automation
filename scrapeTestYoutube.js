const { Builder, Key, By } = require("selenium-webdriver")

async function scrape(){

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.youtube.com/@The_FirstTake');

    var link = await driver.findElements(By.tagName("a"))

    for(let link of links){
        console.log(await link.getText());
    }

    var line = await driver.findElement(By.partialLinkText("nobodyknows+"));
    console.log(await line.getText());
    driver.quit();

}