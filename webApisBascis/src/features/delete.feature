Feature: delete file

Scenario: file should be deleted

Given I upload file "<fileName>" in "<dir>"

When I delete file "<fileName>" in "<dir>"

Then there is no "<fileName>" in "<dir>"

Examples:
    | fileName | dir |
    | firstTest.jpg |/someDir|