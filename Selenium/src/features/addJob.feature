Feature: add new job

Scenario: new job should be visible

Given I add new job 

When check available jobs

Then there is added job
