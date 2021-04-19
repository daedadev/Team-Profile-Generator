const Engineer = require("../lib/engineer");

test('Returns a role of Engineer', () => {

    let engineerRole = new Engineer("bob", 2, 'wron2@hotmail.com', "github.com")
    let expectedRole = "Engineer"

    expect(engineerRole.getRole()).toEqual(expectedRole);

})

test('Returns the github link of the engineer', () => {

    let engineer = new Engineer("bob", 2, 'wron2@hotmail.com', "github.com")
    let github = "github.com"

    expect(engineer.getGithub()).toEqual(github);

})