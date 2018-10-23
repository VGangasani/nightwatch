@headerfunctionality
Feature: As a user I want see the header links available  within the header in the pages to provide the navigation

@pagetitle
  Scenario Outline: : As a user I want to verify the page title and welcome message 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
  
   Examples: 
   |  title  | welcomemessage|
   |React App | Welcome to the National Cyber Security Centre|

@headerlogo
Scenario Outline: As a user I want to verify the ncsc logo is visible in the header
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available

Examples: 
   |  title  | welcomemessage|
   |React App | Welcome to the National Cyber Security Centre|

@verifysearch
Scenario Outline: As a user I want to verify the search cisp media centre and signin is visible in the header
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user looks for the search functionality
    Then user looks for the cisp media centre and signin navigation bar

Examples: 
   |  title  | welcomemessage|
   |React App | Welcome to the National Cyber Security Centre|

@headerlinks
Scenario Outline: As a user I want to verify the links available in the header
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user looks for the header links
    When user clicks on the header links one by one
    Then user see links navigating to the defined page
    

Examples: 
   |  title  | welcomemessage|
   |React App | Welcome to the National Cyber Security Centre|


