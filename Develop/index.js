// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
   .prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a brrief decription on your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide me installation instruction:',
        name: 'instruction',
    },
    {
        type: 'input',
        message: 'What is the usage of the project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the contribution done by you in this project:',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Which are all technologies that has been used in building this project?',
        name: 'technologies',
        choices: ['HTML', 'JS', 'CSS', 'Bootstrap', 'node.js'],
    },
    {
        type: 'input',
        message: 'What are all licence that you used for your project?',
        name: 'license',
        choices: ['MIT', '', '','']
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    

])

.then((answer) => {
    connsole.log(answer);
    fs.writeFile('Readne.md', answer, (err) => {
        err ? console.log(err) :
         console.log('success');
    });
});
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
