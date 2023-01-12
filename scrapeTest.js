const {Key, By, Builder} = require("selenium-webdriver");
require("chromedriver");

async function scrape(){

    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get("http://ratings.fide.com/rankings.phtml");

    var names = driver.findElements(By.css(".tur"));

    for( let n of names){
        console.log(await n.getText());
    }

    driver.quit();
    //i will continue to this but tomorrow i guess , hehe
}