const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 5000);
  });

  test("Does clicking DRAW display the div ID of [choices]?", async () => {
    await driver.get("http://localhost:3000")
    await driver.findElement(By.id('draw')).click()
    await driver.wait(until.elementsLocated(By.id("choices")))
  })

  test("Clicking Add to Duo button displays the div with id 'player-duo'", async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    let playerDuoDiv = await driver.findElement(By.id("player-duo"));
    expect(await playerDuoDiv.isDisplayed()).toBe(true);
  })

});