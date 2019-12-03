Feature: Get Hello World when visiting root

    If the root route is hit the app should respond with hello world

    Scenario Outline: User visits the '/' route
        Given I have an axios instance
        When I visit the "<route>" route
        Then I should get "<response>"

        Examples:
            | route | response     |
            | /     | Hello World! |
