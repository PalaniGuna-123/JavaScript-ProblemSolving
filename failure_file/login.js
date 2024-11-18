const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const mocha = require('mocha');

describe('Login Test', function() {
  let driver;

  // Set up the driver before each test
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
  });

  // Test: Successful login
  it('should login successfully and display welcome message', async function() {
    // Navigate to the login page
    await driver.get('https://example.com/login');

    // Enter username
    await driver.findElement(By.id('username')).sendKeys('testUser');

    // Enter password
    await driver.findElement(By.id('password')).sendKeys('testPassword');

    // Click the login button
    await driver.findElement(By.id('loginButton')).click();

    // Wait until the welcome message is visible
    const welcomeMessage = await driver.wait(
      until.elementLocated(By.id('welcomeMessage')),
      5000
    );

    // Get the text of the welcome message and verify
    const actualMessage = await welcomeMessage.getText();
    const expectedMessage = 'Welcome, User!';
    assert.strictEqual(actualMessage, expectedMessage);
  });

  // Close the driver after each test
  after(async function() {
    await driver.quit();
  });
});
