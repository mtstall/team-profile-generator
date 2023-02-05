const Employee = require('./Employee.js');

class Manager extends Employee {
    
    constructor(empName,id,email,officeNumber) {
        // call constructor method of employee class
        const managerName = empName;
        const managerId = id;
        const managerEmail = email;
        super(empName, id, email); 
        // setting manager office number property
        this.officeNumber = officeNumber;
    }
    // defining getRole method
    getRole() {
        return this.role = 'Manager';
    }
}

// const manager = new Manager('Taylor','id123','email@email.com','123');
// console.log(manager.getEmail());
