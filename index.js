const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');

const colors = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'orange',
    'navy',
    'blue',
    'teal',
    'aqua',
    'brown'
]
const regex = /^#[0-9A-Fa-f]{6}/g;

const questions = [
    {
        type: 'input',
        message: 'Input text for logo with no more than 3 characters',
        name: 'text',
        validate: (input) => {
            if (!input) {return 'Please enter text for your logo (Maximum 3 characters)'}
            else if (input.length <= 3) {return true}
            else {return 'Text cannot be more than 3 characters'}
        }
    },
    {
        type: 'input',
        message: 'Input a color for the text, either a basic color name, or in hexidecimal format, ex #FFA500',
        name: 'color',
        validate: (input) => {
            if (!input) {return 'Please enter a color'}
            else if (colors.includes(input.toLowerCase())) {return true}
            else if (input.match(regex)) {
                return true}
            else {return 'Could not find color/ Please enter a valid color format'}
        }
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        default: 'Circle'
    },
    {
        type: 'input',
        message: 'Input a color for the shape, either a basic color name, or in hexidecimal format, ex #FFA500',
        name: 'shapeColor',
        validate: (input) => {
            if (!input) {return 'Please enter a color'}
            else if (colors.includes(input.toLowerCase())) {return true}
            else if (input.match(regex)) {
                return true}
            else {return 'Could not find color/ Please enter a valid color format'}
        }
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
            console.log('Something went wrong.')
        }
        else {
            console.log('Logo.svg was generated.')
        }
    })
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const input = data
            const newLogo = new Shapes(
                input.text,
                input.color,
                input.shape,
                input.shapeColor,
            )
            const shapeFunc = newLogo.shapeFunction(newLogo);
            const logo = newLogo.generateLogo(newLogo, shapeFunc);
            writeToFile('logo.svg', logo);
        })
        .catch((err) => {
            console.log(err);
            console.log("Something went wrong.");
        })
}

init();