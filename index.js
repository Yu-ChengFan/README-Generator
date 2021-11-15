// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const readme = 'README.md';
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'project description',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'installation instruction',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'project usage',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'contribution guidlines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'project tests instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'project license',
            choices: ['MIT', 'Apache-2.0','BSD-2-Clause', 'No license']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Github User name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Your Email',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Additional questions',
        },
    ]) 
    .then(userInput => {
        writeToFile(readme, generateMarkdown(userInput));
    });
};
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            console.log('error');
        } else {
            console.log('Successful')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

