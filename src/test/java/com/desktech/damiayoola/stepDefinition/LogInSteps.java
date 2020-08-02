package com.desktech.damiayoola.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LogInSteps {
    WebDriver driver;
    @Given("^user is on Sign In page$")
    public void userIsOnSignInPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/customer/account/login");
        driver.findElement(By.linkText("Sign In")).click();
    }

    @When("^user enters his \"([^\"]*)\" address details$")
    public void userEntersHisAddressDetails(String Email) throws Throwable {
        driver.findElement(By.id("email")).sendKeys(Email);
    }

    @And("^user inputs her \"([^\"]*)\"$")
    public void userInputsHer(String Password) throws Throwable {
        driver.findElement(By.name("login[password]")).sendKeys(Password);
    }

    @And("^user clicks the Sign In page$")
    public void userClicksTheSignInPage() {
        driver.findElement(By.cssSelector("#send2 > span")).click();
    }

    @Then("^users MyDashboard is displayed$")
    public void usersMyDashboardIsDisplayed() {
        driver.quit();
        driver.close();

    }
}
