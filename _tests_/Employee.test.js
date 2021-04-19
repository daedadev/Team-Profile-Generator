const Employee = require("../lib/employee");

test('Returns a role of Employee', () => {

    let employeeRole = new Employee("bob", 2, 'wron2@hotmail.com')
    let expectedRole = "Employee"

    expect(employeeRole.getRole()).toEqual(expectedRole);

})

test('Returns the name of Employee', () => {

    let employee = new Employee("bob", 2, 'wron2@hotmail.com')
    let expected = "bob"

    expect(employee.getName()).toEqual(expected);

})

test('Returns the email of Employee', () => {

    let employee = new Employee("bob", 2, 'wron2@hotmail.com')
    let expected = "wron2@hotmail.com"

    expect(employee.getEmail()).toEqual(expected);

})

test('Returns the id of Employee', () => {

    let employee = new Employee("bob", 2, 'wron2@hotmail.com')
    let expected = 2

    expect(employee.getId()).toEqual(expected);

})