$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 3,
  "name": "Log In",
  "description": "",
  "id": "log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Log into created account.",
  "description": "",
  "id": "log-in;log-into-created-account.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters his \"\u003cEmail\u003e\" address details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs her \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks the Sign In page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "users MyDashboard is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "log-in;log-into-created-account.;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 14,
      "id": "log-in;log-into-created-account.;;1"
    },
    {
      "cells": [
        "decentbrand@yahoo.com",
        "goodHeadbad06"
      ],
      "line": 15,
      "id": "log-in;log-into-created-account.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Log into created account.",
  "description": "",
  "id": "log-in;log-into-created-account.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters his \"decentbrand@yahoo.com\" address details",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs her \"goodHeadbad06\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks the Sign In page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "users MyDashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.userIsOnSignInPage()"
});
formatter.result({
  "duration": 5323990150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "decentbrand@yahoo.com",
      "offset": 17
    }
  ],
  "location": "LogInSteps.userEntersHisAddressDetails(String)"
});
formatter.result({
  "duration": 500057660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "goodHeadbad06",
      "offset": 17
    }
  ],
  "location": "LogInSteps.userInputsHer(String)"
});
formatter.result({
  "duration": 120240617,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.userClicksTheSignInPage()"
});
formatter.result({
  "duration": 655169750,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.usersMyDashboardIsDisplayed()"
});
formatter.result({
  "duration": 220407895,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ayoola\u0027, ip: \u00272a02:c7d:3a7:8400:8d2f:e101:34a1:b41f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\n\tat com.desktech.damiayoola.stepDefinition.LogInSteps.usersMyDashboardIsDisplayed(LogInSteps.java:41)\n\tat ✽.Then users MyDashboard is displayed(LogIn.feature:10)\n",
  "status": "failed"
});
});