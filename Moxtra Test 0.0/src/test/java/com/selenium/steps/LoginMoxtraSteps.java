package com.selenium.steps;

import com.selenium.framework.ParentScenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginMoxtraSteps extends ParentScenario {
    @Given("^I access to the browser$")
    public void iAccessToTheBrowser() {
        startBrowser();
    }

    @When("^I go to the \"([^\"]*)\"$")
    public void iGoToThe(String url)  {
        navigateTo(url);
    }

    @When("^I type the correct user \"([^\"]*)\" and pass \"([^\"]*)\"$")
    public void iTypeTheCorrectUserAndPass(String user, String pass){
        //inicioMoxtra.loginCorrectUser(user, pass);
        inicioMoxtra.typyuser(user);
        inicioMoxtra.typypass(pass);
    }

    @When("^I click login$")
    public void iClickLogin() throws InterruptedException {

        inicioMoxtra.clickloginr();
    }

    @Then("^I close the driver$")
    public void iCloseTheDriver() throws InterruptedException {

        closeDriver();

    }
}
