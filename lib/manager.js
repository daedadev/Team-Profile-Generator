const Employee = require("./employee")

class Manager extends Employee{

    constructor(name, id, email, officeNumber){

        super(name, id, email)

        this.officeNumber = officeNumber;

    }

    getRole(){

        const roleName = 'Manager'

        return roleName;

    }
}

module.exports = Manager;