//===========================
//Variables
// ==========================
const fs = require('fs');

// modedule 33 inquirer
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the tite of the application",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of the application",
        name: "description"
    },
    {
        type: "input",
        message: "Enter instructions on how to install the application",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter instructions on how to use the application",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the licensing information of the application",
        name: "license"
    },
    {
        type: "input",
        message: "Enter github username",
        name: "username"
    },
    {
        type: "input",
        message: "Describe the testing of the application",
        name: "testing"
    },
    {
        type: "input",
        message: "Enter an email to be used to be contacted for questions regarding the application",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to prompt questions
function promptQuestions(){
    return inquirer.prompt(questions);
}

// function to initialize program
// modified the async function to "async" function (from module 38)
async function init() {
    // try&catch from module 38
    try{
        console.log("Function init called");
        // calls promptQuestions function and stores answers into "storeData"
        const storeData = await promptQuestions();

        // ajax call to github for avatar_url and email
        const gitHubURL = `https://api.github.com/users/${storeData.username}/repos?per_page=100`
        console.log(gitHubURL);
    }
    catch (err){
        return console.log(err);
    }
}

// function call to initialize program
init();
