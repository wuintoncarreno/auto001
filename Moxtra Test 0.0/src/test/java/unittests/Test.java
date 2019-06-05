package unittests;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/resources/features",
        glue = {"com.selenium.steps"},
        tags = {"@LogingMoxtra"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class Test {

    /*public void TestExecution(){

    }*/

    @AfterClass
    public static void writeExtentReport() {

    }

}