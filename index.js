// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
            {name: 'Add an engineer to the team'},
            {name: 'Add an intern to the team'},
            {name: 'Finish building your team.'},
        ],
        message: "Add an engineer, add an intern, or finish building your team.",
        name: "nextoption",
        default: "Add an engineer to the team",
      }
]

class Teammate {
    constructor(name, empID, email, extraInfo) {
        this.name = name;
        this.empID = empID;
        this.email = email;
        this.extraInfo = extraInfo;
    }

    printTeammateInfo() {
        console.log(`${this.name}, ${this.empID}, ${this.email}, ${this.extraInfo}`);
    }
}

// initialize function
function init(response) {
    inquirer.prompt(managerQuestions).then((response) => {
        showResponses(response);
        if (response.nextoption === 'Finish building your team.') {
        generateHTML(response);
    }
    return; 
    }
    )
  }
  
  init();

  // show responsees
  function showResponses(response) {
    console.log(response.managername);
  }

  // call this function when user is done building out team
  function generateHTML (response) {
    fs.writeFile("./index.html",
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${response.name}</title>
    </head>
    <body>
        <p>${response.location}</p>
        <p>${response.bio}</p>
        <p><a href="${response.linkedin}">LinkedIn</a></p>
        <p><a href="${response.github}">GitHub</a></p>
    </body>
    </html>
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