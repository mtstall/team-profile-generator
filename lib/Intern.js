const Employee = require('./Employee.js');

class Intern extends Employee {
    
    constructor(empName,id,email,school) {
        // call constructor method of employee class
        super(empName, id, email); 
        // setting intern school property
        this.xtrainfo = "School: "+school;
        this.role = 'Intern';
    }
    // defining getRole method
    getRole() {
        return this.role;
    }

    getSchool() {
        return this.xtrainfo;
    }
}

module.exports = Intern;