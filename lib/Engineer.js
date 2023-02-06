const Employee = require('./Employee.js');

class Engineer extends Employee {
    
    constructor(empName,id,email,github) {
        // call constructor method of employee class
        super(empName, id, email); 
        // setting manager office number property
        this.xtrainfo = github;
        this.role = 'Engineer';
    }
    // defining getRole method
    getRole() {
        return this.role;
    }

    getGithub() {
        return this.xtrainfo;
    }
}

module.exports = Engineer;
