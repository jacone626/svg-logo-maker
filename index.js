const inquirer = require("inquirer");
const fs = require('fs');

const questions = function() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Please enter up to 3 characters for your graphic "ex. ABC".',
        name: "text",
      },
      {
        type: 'input',
        message: 'Please select a text color.',
        name: "textColor"
      },
      {
        type: 'list',
        message: 'Please select a shape',
        name: "shape",
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        message: 'Please select a color for the shape',
        name: "shapeColor"
      },
])
.then((data) =>
  fs.writeFile(`${shape}logo.svg`, render(data), (err) =>
  err ? console.error(err) : console.log('Logo has been created.')
  ))
};

questions();