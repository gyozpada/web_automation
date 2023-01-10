const {Key, By, Builder} = require("selenium-webdriver");
require("chromedriver");

async function scrape(){

    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get("http://ratings.fide.com/rankings.phtml");

    var names = driver.getElements(By.css(".tur"));


    driver.quit();
}