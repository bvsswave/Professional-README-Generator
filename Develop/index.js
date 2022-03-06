// TODO: Include packages needed for this application
// variables

const inquirer = require('inquirer');
const fs = require('fs');
const { generateMakrdown } = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Your project needs a title!');
                    return false;
                }
            }
        },

        
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please write a description of your project');
                    return false;
        }
     }
},

{
    type: 'checkbox',
    name: 'languages',
    message:'What languages does your application use?',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node', 'React']
},

    {type: 'input',
    name: 'packages',
    message: 'Are there installations/packages that need to be installed?'   
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What is the purpose of this project?'   
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Can someone contribute?'
    },
    {
    type: 'input',
    name: 'credit',
    message: 'Who else worked on this project? (If any)'
    },
    {   
    type: 'input',
    name: 'test',
    message: 'Will there be tests?'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Select the License for this project?',
    choices: [
    'Apache',
    'GNU',
    'GPL',
    'ISC',
    'MIT',
    'Open',
]},
{
    type: 'input',
    name: 'github',
    message: 'Enter your Github username'
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email:'
    }

    ])
};




// TODO: Create a function to write README file

let writeFile = (fileName, data) => {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
            console.log('File has been created')
    })
}

// TODO: Create a function to initialize app

    //  this initializes app

function init() {
    questions ()
    .then(input =>{
        return generateMarkdown(input);
    })
    .then(markdown => {
        writeFile('README.md', markdown);
    })
    .catch(err => {
            console.log(err);
    })

}

// Function call to initialize app
init();
