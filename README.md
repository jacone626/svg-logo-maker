# SVG-Logo-Maker
Logo Maker

## Description
This application is a simple logo generator that is run out of the terminal. It prompts the user with several questions and then generates a logo.svg file within that project. 

## Installation
Ensure that you have node and jest installed. Then, just clone the repository into VSCode or some other coding application. 

## Usage
A user must clone the repository and navigate to the correct folder within the terminal. Once in the correct folder, type in "node index.js". The user will then be prompted with the first question, which is to enter up to 3 characters.

![command line with first question asking for up to 3 characters](images/readme-question.png)

Once you enter your response, press enter and the next question will come up. After the final question, which asks for the color of your shape, the terminal will log "Logo"has been created".

![command line with all questions and Logo generated logged](images/readme-all-questions.png)

Within the project, a new file with your generated readme will be creadted. This file is titled "logo.svg" and will look like the below picture.

![README file that was generated with user responses](images/generated-readme.png)

To test the code and ensure that a shape was rendered, run "npm run test" in the command line. The result below, shows that the circle, square, and triangle all passed the test and were properly rendered. 


![command line with the three tests that all passed](images/generated-readme.png)

Below is a link to a walkthrough video:

[Walkthrough Video]()

## Credits



## License
Please refer to the license in the repo.