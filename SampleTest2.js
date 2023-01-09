const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){

    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //send driver to website
    await driver.get("https://github.com/")

    //grab an element from the page
    await driver.findElement(By.partialLinkText("Sign in")).click();

    //display the title
    console.log(await driver.getTitle());

    //Test#1
    //if the tittle isn't correct,it will failed
    if(await driver.getTitle() === "GitHub: Let’s build from here · GitHub"){
        console.log("Test #1 Success")
    } else {
        console.log("Test #1 Failed");
    }

    //input a username and passwordlet a1 = driver.actions();
    a1.pause(100).perform();
    await driver.findElement(By.name("login")).sendKeys("ThisTextInUsernameBox");
    await driver.findElement(By.name("password")).sendKeys("**********", Key.RETURN);

    //Test#2
    //if the corrected elemet isn't displayed, it will failed
    if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
        console.log("Test #2 Success");
    } else {
        console.log("Test #2 Failed");
    }

    setInterval(function(){
        driver.quit();
    }, 10000)
}

test_case();