Feature: upload file with specific name

Scenario: file should have defined name

Given I upload "<fileName>" in "<dir>"

When I get metadata of uploaded file 

Then uploaded file has "<fileName>" name

Examples:
    | fileName | dir |
    | firstTest.jpg | /webApiHw |