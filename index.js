// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const README = require("./utils/README");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input


const questions = () => {
return inquirer.prompt([
    
   
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Please list the steps to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is the application used?  Describe the necessary steps?",
        name: "usage"
    },
    {
        type: "input",
        message: "Choose one of the following as your license/badge?  [APACHE2.0, BSD3, MIT, GPL3.0 ]",
        name: "badge",
        
    },
{
        type: "input",
        message: "What are the guidelines for contributors?",
        name: "contributions"
},
    {
        type: "input",
        message: "What are the tests?",
        name: "test"
    },
    
    {
        type: "input",
        message: "Please list application features?",
        name: "features"
    },
  
    {
        type: "input",
        message: "What is your deployed GitHub url?",
        name: "githuburl"
    },
    {
        type: "input",
        message: "Share your deployed URL",
        name: "deployedurl"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubusername"
    },
    {
        type: "input",
        message: "What is your contact email?",
        name: "email"
    },
   
])};



// TODO: Create a function to write README file

const createFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const data= await questions();
        const createContent = README(data);
    
        await createFile(`./newReadMe/README.md`,createContent);
        console.log("README.md created!");
    }   
    catch(err) {
    console.log(err);
    }
    
};

// Function call to initialize app
init();