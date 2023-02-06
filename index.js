// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const html = require("./dist/generatehtml.js");

// array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "Enter manager name:",
    name: "name",
    default: "Mr Manager",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter manager employee ID:",
    name: "empid",
    default: "1234",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter manager email:",
    name: "email",
    default: "manager@business.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter manager office number:",
    name: "xtrainfo",
    default: "123",
    validate: validateInput,
  },
  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
    default: "Add an engineer to the team",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Enter employee name:",
    name: "name",
    default: "Mr Engineer",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer employee ID:",
    name: "empid",
    default: "1234",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer email:",
    name: "email",
    default: "engineer@business.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter engineer Github:",
    name: "xtrainfo",
    default: "engineer_01",
    validate: validateInput,
  },
  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
    default: "Add an engineer to the team",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Enter employee name:",
    name: "name",
    default: "Mr Intern",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter intern employee ID:",
    name: "empid",
    default: "1234",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter intern email:",
    name: "email",
    default: "intern@business.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "Enter intern's school:",
    name: "xtrainfo",
    default: "University of Interns",
    validate: validateInput,
  },
  {
    type: "list",
    choices: [
      { name: "Engineer" },
      { name: "Intern" },
      { name: "Finish building your team." },
    ],
    message: "Add an engineer, add an intern, or finish building your team.",
    name: "nextoption",
    default: "Add an engineer to the team",
  },
];

let teamArray = [];

// initialize function
function init(response) {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.empid,
      response.email,
      response.xtrainfo
    );
    // add manager to team array
    teamArray.push(manager);
    nextQuestions(response);
  });
}

init();

// code to decide which set of questions to run next
function nextQuestions(response) {
  if (response.nextoption === "Finish building your team.") {
    // generate html
    generateHTML(teamArray);
  }
  if (response.nextoption === "Engineer") {
    // run engineer inquirer
    engineerInquirer();
  }
  else if (response.nextoption === "Intern") {
    // run intern inquirer
    internInquirer();
  }
}

function generateHTML (teamArray) {
  console.log(teamArray);
  // if (teamArray.getRole() === 'Manager') {
  //   let xtrainfo = 
  // }
  console.log(teamArray[0].getRole());
  console.log(teamArray[0].xtrainfo);
  // for (let i = 0; i < teamArray.length; i++) {
    //generate a card for each team member 
    const cardArray = teamArray.map( teamMember =>`
    <div class="card">
<div class="card-header">
    <h2>${teamMember.empName}</h2>  
    <h2><i class="far fa-user"></i> ${teamMember.getRole()}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${teamMember.id}</li>
        <li>Email: ${teamMember.email}</li>
        <li>${teamMember.xtrainfo} </li>
    </ul>
</div>
</div>
    `)
  // }

  const htmlWrapper = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${cardArray.join("")}
  </body>
  </html>`;
  console.log(htmlWrapper);

}

function engineerInquirer(response) {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.empid,
      response.email,
      response.xtrainfo,
    );
    // add new engineer team member to team array
    teamArray.push(engineer);
    nextQuestions(response);
  });
}

function internInquirer(response) {
  inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.empid,
      response.email,
      response.xtrainfo,
    );
    // add new intern team member to team array
    teamArray.push(intern);
    nextQuestions(response);
  });
}

// call this function when user is done building out team
function generateManagerHTML(manager) {
  fs.writeFile(
    "./dist/index.html",
    `manager role: 
    ${manager.getRole()}
    `,
    (err) => (err ? console.log(err) : console.log("HTML generated!"))
  );
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
