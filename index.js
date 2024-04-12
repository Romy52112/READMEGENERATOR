// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const question = [
    {
        type: 'input',
        message: 'Enter your project title?',
        name: 'title',
    },
    {
        type: 'list',
        choices: ['MIT', 'Apache 2.0','GPL 3.0',"none",],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the command to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter an example of usage ?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter information about contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter test instructions?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Provide a valid email address?',
        name: 'email',
    },
    {
        type: "input",
        name: "creator",
        message: "Provide your GitHub username.",
      },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question).then((responses) => {
        console.log("Creating Professional README.md file ...");
        writeToFile("./README.md", generateMarkdown({...responses }));
    })
}
// Function call to initialize app
init()