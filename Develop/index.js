// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project.",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a description for your project including why you created this project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license for this project.",
    choices: ["MIT", "Apache2.0", "ISC", "N/A"],
  },
  {
    type: "input",
    name: "install",
    message:
      "Provide installation instructions and dependencies needed for this project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide a description of how to use this project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter any contributors for this project.",
  },
  {
    type: "input",
    name: "test",
    message: "Enter instructions for testing.",
  },
  {
    type: "input",
    name: "name",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("generated-README.md", markdown);
    console.log("Successfully created README.md");
  });
}

// Function call to initialize app
init();
