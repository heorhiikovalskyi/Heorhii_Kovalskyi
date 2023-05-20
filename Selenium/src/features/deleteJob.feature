Feature: delete job

Scenario: job should be delited

Given I delete job

When check available jobs

Then there is no deleted job