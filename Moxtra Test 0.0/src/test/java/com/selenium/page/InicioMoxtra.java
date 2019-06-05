package com.selenium.page;

import com.selenium.framework.ParentPage;
import cucumber.api.CucumberOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;



public class InicioMoxtra extends ParentPage {
    public InicioMoxtra(WebDriver driver){super(driver);}

    By txt_user = By.cssSelector("#salogin > div:nth-child(1) > input");
    By txt_pass = By.cssSelector("#salogin > div:nth-child(2) > input");
    By login = By.cssSelector("#salogin > div:nth-child(3) > input");


    public void typyuser(String user){
        TypeInTextField(txt_user, user);
    }
    public void typypass(String pass){
        TypeInTextField(txt_pass, pass);
    }

    public void clickloginr(){
        ClickOnLocator(login);
    }



}
