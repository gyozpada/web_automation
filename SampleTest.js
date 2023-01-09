const { By, Builder, Key } = require('selenium-webdriver');
require("chromedriver");

async function example(){
    //create driver
    let driver = await new Builder().forBrowser('chrome').build();

        //send driver to website
        await driver.get("https:/www.google.com");

        //grab an element from the page
        await driver.findElement(By.name("q")).sendKeys("This text will be texted in Search Bar", Key.RETURN);
        await driver.quit();

        setInterval(function(){
            driver.quit();
        }, 10000);

};

example();