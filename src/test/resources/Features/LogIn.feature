@LogIn

Feature: Log In

  Scenario Outline: Log into created account.
    Given user is on Sign In page
    When user enters his "<Email>" address details
    And user inputs her "<Password>"
    And user clicks the Sign In page
    Then users MyDashboard is displayed


    Examples:
      | Email                 | Password      |
      | decentbrand@yahoo.com | goodHeadbad06 |
