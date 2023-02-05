const Employee = require('./Employee.js');

class Intern extends Employee {
    
    constructor(empName,id,email,school) {
        // call constructor method of employee class
        const internName = empName;
        const internId = id;
        const internEmail = email;
        super(empName, id, email); 
        // setting intern school property
        this.school = school;
    }
    // defining getRole method
    getRole() {
        return this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;