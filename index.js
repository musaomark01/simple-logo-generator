const inquirer = require('inquirer');
const fs = require('fs');

const Shape = require('./lib/Shape');
const Circle = require('./lib/circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/square');

const shape = new Shape().render();
const circle = new Circle().render();
const triangle = new Triangle().render();
const square = new Square().render();

inquirer
.prompt([
    {
    type: 'list',
    name: 'selectedShape',
    message: 'What shape you want your logo to be?',
    choices: ['Circle','Triangle','Square'],
        },
    {
    type: 'input',
    name: 'color',
    message: 'Input the color you want for your shape?',
    },
    {
    type: 'input',
    name: 'textColor',
    message: 'Input the color you want for your textColor?',
    },
    {
    type: 'input',
    name: 'text',
    message: 'Input a max of three characters for your svg logo?',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter a maximum of three characters.';
    },
  },
])
.then((data) => {
    const { color, textColor, text,selectedShape} = data;

 let finalShape = '';
 switch (selectedShape) {
    case 'Circle':
    finalShape = circle;
        break;
    case 'Triangle':
    finalShape = triangle;
        break;
    case 'Square':
    finalShape = square;
        break;
 }

const svg = ` ${shape}
${finalShape}fill="${color}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`

fs.writeFile('logo.svg', svg, (err) => {
    if (err) {
      console.error('Error writing logo.svg file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});