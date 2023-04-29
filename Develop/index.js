// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a brief decription on your project:',
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
        type: 'list',
        message: 'What are all licence that you used for your project?',
        name: 'license',
        choices: ['MIT', 'MPL2.0', 'APACHE2.0','none']
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    

];
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log ("Readme.md file created");
        writeToFile ("./Readme.md", generateMarkdown({answers}));
    });
}
init();

// .then((answers) => {
//     const readmeContent  = generateReadme(answers)
//     fs.writeFile('Readme.md', readmeContent, (err) => {
//         err ? console.log(err) :
//          console.log('success');
//     });
// });

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
