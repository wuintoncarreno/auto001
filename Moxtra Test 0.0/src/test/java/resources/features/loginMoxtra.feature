@LogingMoxtra
Feature: Login in Moxtra

  Scenario Outline: Enter to some url direction

    Given I access to the browser

    When I go to the "<url>"

    #  When I type the correct user "<user>"

    #  When I type the correct pass "<pass>"

    When I type the correct user "<user>" and pass "<pass>"

    When I click login
    Then I close the driver

    Examples:
      | url                                 | user  | pass    |
      | https://fisqa.moxtra.com/mybank/sa  |sa001  |sa001123 |
