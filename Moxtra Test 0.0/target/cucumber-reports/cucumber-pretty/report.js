$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginMoxtra.feature");
formatter.feature({
  "line": 2,
  "name": "Login in Moxtra",
  "description": "",
  "id": "login-in-moxtra",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogingMoxtra"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Enter to some url direction",
  "description": "",
  "id": "login-in-moxtra;enter-to-some-url-direction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I access to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I go to the \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  When I type the correct user \"\u003cuser\u003e\""
    },
    {
      "line": 12,
      "value": "#  When I type the correct pass \"\u003cpass\u003e\""
    }
  ],
  "line": 14,
  "name": "I type the correct user \"\u003cuser\u003e\" and pass \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I close the driver",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-in-moxtra;enter-to-some-url-direction;",
  "rows": [
    {
      "cells": [
        "url",
        "user",
        "pass"
      ],
      "line": 20,
      "id": "login-in-moxtra;enter-to-some-url-direction;;1"
    },
    {
      "cells": [
        "https://fisqa.moxtra.com/mybank/sa",
        "sa001",
        "sa001123"
      ],
      "line": 21,
      "id": "login-in-moxtra;enter-to-some-url-direction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Enter to some url direction",
  "description": "",
  "id": "login-in-moxtra;enter-to-some-url-direction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogingMoxtra"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I access to the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I go to the \"https://fisqa.moxtra.com/mybank/sa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#  When I type the correct user \"\u003cuser\u003e\""
    },
    {
      "line": 12,
      "value": "#  When I type the correct pass \"\u003cpass\u003e\""
    }
  ],
  "line": 14,
  "name": "I type the correct user \"sa001\" and pass \"sa001123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I close the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMoxtraSteps.iAccessToTheBrowser()"
});
formatter.result({
  "duration": 3836464138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://fisqa.moxtra.com/mybank/sa",
      "offset": 13
    }
  ],
  "location": "LoginMoxtraSteps.iGoToThe(String)"
});
formatter.result({
  "duration": 7185605653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sa001",
      "offset": 25
    },
    {
      "val": "sa001123",
      "offset": 42
    }
  ],
  "location": "LoginMoxtraSteps.iTypeTheCorrectUserAndPass(String,String)"
});
formatter.result({
  "duration": 221400660,
  "status": "passed"
});
formatter.match({
  "location": "LoginMoxtraSteps.iClickLogin()"
});
formatter.result({
  "duration": 1140955622,
  "status": "passed"
});
formatter.match({
  "location": "LoginMoxtraSteps.iCloseTheDriver()"
});
formatter.result({
  "duration": 640620400,
  "status": "passed"
});
});