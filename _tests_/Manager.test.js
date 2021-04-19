const Manager = require("../lib/manager");

test('Returns a role of Manager', () => {

    let managerRole = new Manager("bob", 2, 'wron2@hotmail.com', 22)
    let expectedRole = "Manager"

    expect(managerRole.getRole()).toEqual(expectedRole);

})
