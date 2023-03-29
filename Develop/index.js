// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  name: "title",
  message: "Enter the title of the project.",
},
{
  type: "input",
  name: "description",
  message: "Provide a description for your project.",
},
{
  type: "checkbox",
  name: "license",
  message: "Please select a license for this project.",
  choices: ["MIT", "Apache 2.0", "Mozilla Public", "Eclipse Public ", "BSD 2", "BSD 3", "N/A"],
},
{
  type: "input",
  name: "install",
  message: "Provide installation instructions and dependencies needed for this project.",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
