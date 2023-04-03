const inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js')


const shapes = function(data) {
  if (data.shape === "circle") {
    const circle = new Circle(data.text, data.textColor, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${circle.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`
  }
  else if (data.shape === "square") {
    const square = new Square(data.text, data.textColor, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${square.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`
  }
  else if (data.shape === "triangle") {
    const triangle= new Triangle(data.text, data.textColor, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${triangle.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`
  }
}

const questions = function() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Please enter up to 3 characters for your graphic "ex. ABC".',
        name: "text",
        validate: (text) => {
            if (text.length > 0 && text.length < 4 ) {
                return true;
            }
            else{
                console.log("\nInvalid entry. User must enter at least one character and no more than 3 characters.")
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'Please select a text color.',
        name: "textColor"
      },
      {
        type: 'list',
        message: 'Please select a shape.',
        name: "shape",
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        message: 'Please select a color for the shape.',
        name: "shapeColor"
      },
])
.then((data) =>
  fs.writeFile(`logo.svg`, shapes(data), (err) =>
  err ? console.error(err) : console.log('Logo has been created.')
  ))
};

questions();