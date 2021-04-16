const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const inquirer = require('inquirer');
const Choices = require("inquirer/lib/objects/choices");

const fs = require('fs');

// Setup the starter HTML
let mainHTML = ``;
let engineerHTML = `    
    <!-- Table holding the information for the Engineer(s) -->
    <table>
        <thead>
            <tr>
                <th colspan="4">Engineer List</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Github Link</th>
            </tr>
        </thead>
        <tbody>`;
let internHTML = `    
    <!-- Table holding all the information for the Intern(s) -->
    <table>
        <thead>
            <tr>
                <th colspan="4">Intern List</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>School</th>
            </tr>
        </thead>
        <tbody>`;

// Function that runs on startup beginning the program
function startMenu(){

    createManager();

}

// Runs through the manager creation prompts
function createManager(){

    console.log('Build your team');
    
    inquirer.prompt([

        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "What is the team manager's office number?"
        }


    ]).then(answers => {

        // Use the manager import to quickly create an manager object
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)

        mainHTML += `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <!-- Table holding the information for the Manager -->
    <table>
        <thead>
            <tr>
                <th colspan="4">Manager</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Office Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${manager.name}</td>
                <td>${manager.id}</td>
                <td><a href="mailto:${manager.email}">${manager.email}</a></td>
                <td>${manager.officeNumber}</td>
            </tr>
        </tbody>
    </table>
    <br>`

        chooseNext();
    })

}

// Function that runs you through a list prompt to determine which prompt to give you next
function chooseNext(){

    inquirer.prompt([

        {
            type: 'list',
            name: 'chooseNext',
            message: "What type of employee would you like to add",
            choices: ["Intern", "Engineer", "I dont want to add any other employees"]
        },

    ]).then(answer => {

        console.log(answer.chooseNext);
        if(answer.chooseNext === 'Engineer'){

            createEngineer();

        }else if(answer.chooseNext === 'Intern'){

            createIntern();

        // Determine if the function has been ended and finish generating the HTML
        }else{

            internHTML += `            
        </tbody>
    </table>
    <br>`

            engineerHTML += `            
        </tbody>
    </table>
    <br>`

            mainHTML = mainHTML + engineerHTML + internHTML;

            mainHTML += `        
</body>
</html>`

            console.log('Congrats on your new list');

            fs.writeFile('./dist/index.html', mainHTML,  err => {

                console.log(err);

            });
        }
    })
}

// Function that runs you through a prompt to create an engineer
function createEngineer(){
    
    inquirer.prompt([

        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's github link?"
        }


    ]).then(answers => {

        // Use the Engineer import to quickly create an Engineer object
        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        
        engineerHTML += `            
            <tr>
                <td>${engineer.name}</td>
                <td>${engineer.id}</td>
                <td><a href="mailto:${engineer.email}">${engineer.email}</a></td>
                <td><a target="_blank" href="${engineer.github}">${engineer.github}</a></td>
            </tr>`
        
        chooseNext();

    })
}

// Function that runs you through a prompt to create an intern
function createIntern(){
    
    inquirer.prompt([

        {
            type: 'input',
            name: 'internName',
            message: "What is the team intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the team intern's id?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the team intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What does/did the intern attend?"
        },

    ]).then(answers => {

        // Use the intern import to quickly create an intern object
        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)

        internHTML += `            
            <tr>
                <td>${intern.name}</td>
                <td>${intern.id}</td>
                <td><a href="mailto:${intern.email}">${intern.email}</a></td>
                <td>${intern.school}</td>
            </tr>`

        chooseNext();

    })

}

startMenu();