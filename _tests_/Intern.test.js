const Intern = require("../lib/intern");

test('Returns a role of Intern', () => {

    let internRole = new Intern("bob", 2, 'wron2@hotmail.com', "USC")
    let expectedRole = "Intern"

    expect(internRole.getRole()).toEqual(expectedRole);

})

test('Returns the school of Intern', () => {

    let intern = new Intern("bob", 2, 'wron2@hotmail.com', "USC")
    let expectedRole = "USC"

    expect(intern.getSchool()).toEqual(expectedRole);

})