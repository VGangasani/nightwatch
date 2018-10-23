
   @Guidance
   Feature: As a user I want to look for the guidance page by using seach 


@search
  Scenario Outline: : As a user I want to look for the search in header 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality 
    Then user clicks on the search finctionality
    Then user see the input search box
      
Examples: 
   |  title  | welcomemessage| 
   |React App | Welcome to the National Cyber Security Centre|


@searchResult
Scenario Outline: As a user I want to search for guidance page
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results 

Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|

@selectGuidance
Scenario Outline: As a user I want to select the guidance page and verify
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|



@GuidanceTitle
Scenario Outline: As a user I want to select the guidance page and verify the guidance info title, summary and created date
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user verify guidance title is available
    Then user verify guidance summary is available
    Then user verify created date ia available

Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|



@GuidanceInformationPanel
Scenario Outline: As a user I want to select the guidance page and verify the guidance info panel 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user verify guidance information panel is available
    Then user verify published date is available
    Then user verify reviewed date is available
    Then user verify version is available
    Then user verify written for is available

Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|



@GuidancePrimaryImage
Scenario Outline: As a user I want to select the guidance page and verify the guidance guidance primary image
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user verify guidance primary image is available

Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceDownloadPanel
Scenario Outline: As a user I want to select the guidance page and verify the guidance download panel 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user verify guidance download panel is available
    
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|



@GuidanceInThisGuide
Scenario Outline: As a user I want to select the guidance page and verify the guidance in this guide
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page
    Then user verify guidance in this guide is available
    
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceHelpText
Scenario Outline: As a user I want to select the guidance page and verify the guidance help text
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user verify guidance help text is available
    When user clicks on the i help text icon
    Then user see the sliding model window appear
    Then user verify the help text is available in side model window
    Then user closes the sliding model window
    
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceTaggedTerm
Scenario Outline: As a user I want to select the guidance page and verify the tagged term in guidance 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user looks for the tagged terms is available
    When user clicks on the tagged term 
    Then user see the sliding model window appear
    Then user verify the tagged term is available inside model window
    
    Then user closes the sliding model window
    
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceAccordion
Scenario Outline: As a user I want to select the guidance page and verify the accordion in guidance 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page
    
    Then user looks for the accordion is available
    Then user clicks on the accordion and verify  
    Then user clicks on the accordion will disappear and verify
    
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceDownload
Scenario Outline: As a user I want to select the guidance page and verify the accordion in guidance 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user looks for the download panel and verify
    Then user verify the documents information is visible
      
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|


@GuidanceTopics
Scenario Outline: As a user I want to select the guidance page and verify the topics in guidance 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user looks for the topics panel
    Then user verify the topics are clickable
    
      
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|

@GuidanceAlsosee
Scenario Outline: As a user I want to select the guidance page and verify the also see in guidance 
    Given user want to open the ncsc website
    When user verify the home page title "<title>"
    Then user verify is on the ncsc home pape "<welcomemessage>"
    Then user check ncsc header is available
    Then user verify ncsc logo is available
    Then user looks for the search functionality
    Then user clicks on the search finctionality
    Then user see the input search box
    When user enter the search query as "<search>"
    Then user clicks on the search to see the result
    Then user see the search results
   
    Then user select the guidance page
    Then user verify he is on guidance page

    Then user looks for the also see panel
    Then user verify the also see panel got the information
    
      
Examples: 
   |  title  | welcomemessage| search|
   |React App | Welcome to the National Cyber Security Centre|guidance|