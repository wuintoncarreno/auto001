package com.selenium.framework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public abstract class DSL {
    private WebDriver driver;

    public DSL(WebDriver driver){
        this.driver = driver;
    }


    public void ClickOnLocator (By locator){

        driver.findElement(locator).click();
    }

    public void TypeInTextField(By locator, String text){

        driver.findElement(locator).sendKeys(text);
    }

    public String getTextOfTextField (By locator){

        return driver.findElement(locator).getText();
    }
}
