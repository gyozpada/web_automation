const {By, Key, Builder, Browser} = require("selenium-webdriver");
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
    await driver.getTitle() === "GitHub: Let’s build from here · GitHub" ? PrintResult(true) : PrintResult(false)
    // if(await driver.getTitle() === "GitHub: Let’s build from here · GitHub"){
    //     console.log("Test #1 \x1b[32mPass....")
    // } else {
    //     console.log("Test #1 \x1b[31Failed....");
    // }

    //set time await to load page
    await driver.manage().setTimeouts( {implicit: 10000} );

    //input a username and passwordlet a1 = driver.actions();
    await driver.findElement(By.name("login")).sendKeys("ThisTextInUsernameBox");
    await driver.findElement(By.name("password")).sendKeys("**********", Key.RETURN);

    function PrintResult(boolean){
        boolean ? console.log(" \x1b[32mPass") : console.log(" \x1b[31Failed")
    }

    async function ClassNameTest(cssClassName){
     const result =  await driver.findElement(By.className(cssClassName)).isDisplayed() ? PrintResult(true) : PrintResult(false)
     return result
    }

    async function TextCheck(ElementText){
        const result =  await driver.findElement(By.className(ElementText)).isDisplayed() ? PrintResult(true) : PrintResult(false)
        return result
    }


    //Test#2
    //if the corrected elemet isn't displayed, it will failed
    // if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
    //     console.log("Test #2 Success");
    // } else {
    //     console.log("Test #2 Failed");
    // }

    ClassNameTest("flash flash-full flash-error")
    // TextCheck()

    setInterval(function(){
        driver.quit();
    }, 10000)
}

test_case();