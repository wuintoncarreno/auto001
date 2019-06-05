package com.selenium.framework;

import com.selenium.page.InicioMoxtra;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class ParentScenario {
    private WebDriver driver;

    protected static InicioMoxtra inicioMoxtra;

    public void startBrowser(){
        //for Windows:
        //System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\java\\resources\\drivers\\chromedriver.exe");

        //for Mac:
        System.setProperty("webdriver.chrome.driver", "/Users/caquije/Documents/webdriver/chromedriver");
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        ChromeOptions options = new ChromeOptions();

        try{
            driver = new ChromeDriver();
            //nativateTo("https://www.google.com");
        }catch (Exception e){
            System.out.println("Excepcion al momento de inicializar el driver: " + e);
        }
        inicioMoxtra = new InicioMoxtra(driver);

    }
    public void navigateTo (String url){
        driver.navigate().to(url);
    }

    public void closeDriver(){
        driver.quit();
    }
}
