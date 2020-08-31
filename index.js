//===========================
//Variables
// ==========================
const fs = require('fs');
const util= require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// axios
const axios = require("axios");

// modedule 33 inquirer
const inquirer = require("inquirer");

// required for async await module 39
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

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
        name: "installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "Enter instructions on how to use the application",
        name: "usage"
    },
    {
        type: "input",
        message: "What do I need to know about contributing",
        name: "contributing"
    },
    {
        type: "list",
        message: "Enter the licensing information of the application",
        choices: [
            {
				name: 'Apache 2.0 License',
				value: {
					name: 'Apache 2.0 License',
					link: 'Apache',
					url: 'https://opensource.org/licenses/Apache-2.0',
					color: 'blue',
				},
			},
			{
				name: 'MIT',
				value: {
					name: 'MIT',
					link: 'MIT',
					url: 'https://opensource.org/licenses/MIT',
					color: 'yellow',
				},
			},
			{
				name: 'GPL 3.0',
				value: {
					name: 'GPL 3.0',
					link: 'GPLv3',
					url: 'https://www.gnu.org/licenses/gpl-3.0',
					color: 'blue',
				},
			},
			{
				name: 'BSD 3',
				value: {
					name: 'BSD 3',
					link: 'BSD%203--Clause',
					url: 'https://opensource.org/licenses/BSD-3-Clause',
					color: 'orange',
				},
			},
			{
				name: 'Unlicense',
				value: {
					name: 'Unlicense',
					link: 'Unlicense',
					url: 'http://unlicense.org/',
					color: 'blue',
				},
			},
        ],
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
        name: "testing",
        default: "npm test"
    },
    {
        type: "input",
        message: "Enter an email to be used to be contacted for questions regarding the application",
        name: "email"
    }
];

// function to write README file
// changed to async function
async function writeToFile(fileName, data) {
    try{
        console.log("\nwriteToFile function called");
        // store answers to formulate the README
        return fs.writeFileSync(fileName, data);
    }
    catch(err){
        console.log(err);
    }
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
        const storeData = await promptQuestions().then(answers=>{
            console.log(answers);
            writeToFile("generateREAD.md", generateMarkdown(answers));
        
        })

        // ajax call to github for avatar_url and email
        // const gitHubURL = `https://api.github.com/users/${storeData.username}/repos?per_page=100`
        // console.log(gitHubURL);
        // const avatar = await axios.get(gitHubURL).then(function(response){
        //     console.log("===============");
        //     console.log(response.data.avatar_url);
        // })
        // const email = await axios.get(gitHubURL).then(function(response){
        //     console.log("===============");
        //     console.log(response.data.email);
        // })

        // calling function writeToFile
        

    }
    catch (err){
        return console.log(err);
    }
}

// function call to initialize program
init();
