// TODO: Include packages needed for this application
// variables

const inquirer = require('inquirer');
const fs = require('fs');
const { generateMakrdown } = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

    fs.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
            console.log('File has been created')
    })
}

// TODO: Create a function to initialize app

//  this initializes app

function init() {
    promptProject ()
    .then(input =>{
        return generateMarkdown(input);
    })
    .then(input =>{
        return generateMarkdown(input);
    })
    .then(markdown => {
        writeToFile('readMe.md', markdown);
    })
    .catch(err => {
            console.log(err);
    })

}

// Function call to initialize app
init();
