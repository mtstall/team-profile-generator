const Engineer = require('./Employee.js');

class Engineer extends Employee {
    
    constructor(empName,id,email,github) {
        // call constructor method of employee class
        const engineerName = empName;
        const engineerId = id;
        const engineerEmail = email;
        super(empName, id, email); 
        // setting manager office number property
        this.github = github;
    }
    // defining getRole method
    getRole() {
        return this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Manager;
