const Employee = require('./Employee.js');
// test for each method and whether it's returning an object
class Manager extends Employee {
    
    constructor(empName,id,email,officeNumber) {
        // call constructor method of employee class
        super(empName, id, email); 
        // setting manager office number property
        this.xtrainfo = "Office number: "+officeNumber;
        this.role = 'Manager';
    }
    // defining getRole method
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.xtrainfo
    }
}

module.exports = Manager;