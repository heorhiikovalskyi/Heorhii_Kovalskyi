Feature: upload the same name file second time

Scenario: second file should not be uploaded

Given I upload file "<fileName>" in "<dir>"

When I upload second time file "<fileName>" in "<dir>"

Then there is only one file "<fileName>" in "<dir>"

Examples:
    | fileName | dir |
    | firstTest.jpg |/someDir  |