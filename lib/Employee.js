class Employee {
    constructor(empName, id, email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.empName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // unsure
    }
}
const employee = new Employee('Taylor','123','email@email.com');
employee.getEmail();
module.exports = Employee;