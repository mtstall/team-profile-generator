// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
console.log(Manager);

// array of questions for user input
const managerQuestions = [
    {
        type: "input",
        message: "Enter manager name:",
        name: "managername",
        default: "Mr Manager",
        validate: validateInput,
      },
      {
        type: "input",
        message: "Enter manager employee ID:",
        name: "managerempid",
        default: "1234",
        validate: validateInput,
      },
      {
        type: "input",
        message: "Enter manager email:",
        name: "manageremail",
        default: "manager@business.com",
        validate: validateInput,
      },
      {
        type: "input",
        message: "Enter manager office number:",
        name: "managerofficenum",
        default: "123",
        validate: validateInput,
      },
      {
        type: "list",
        choices: [
            {name: 'Engineer'},
            {name: 'Intern'},
            {name: 'Finish building your team.'},
        ],
        message: "Add an engineer, add an intern, or finish building your team.",
        name: "nextoption",
        default: "Add an engineer to the team",
      }
]

// initialize function
function init(response) {
    inquirer.prompt(managerQuestions).then((response) => {
      const manager = new Manager(response.name,response.id,response.email,response.managerofficenum);
        if (response.nextoption === 'Finish building your team.') {
        generateManagerHTML(manager);
        }
    return; 
    }
    )
  }
  
  init();

  // call this function when user is done building out team
  function generateManagerHTML (manager) {
    fs.writeFile("./index.html",
    `manager role: 
    ${manager.getRole()}
    `, (err) => err ? console.log(err) : console.log("HTML generated!"));
  }


// validate input
function validateInput(input) {
    if (input === "") {
      console.log("Please enter a value.");
      return false;
    } else {
      return true;
    }
  }