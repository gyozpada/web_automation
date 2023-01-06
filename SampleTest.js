const { Builder } = require('selenium-webdriver');

(async function example(){
    let driver = new Builder().forBrowser('chrome').build();

    try{
        await driver.get("https:/www.google.com");
    }
    finally{
        await driver.quit();
    }
})();