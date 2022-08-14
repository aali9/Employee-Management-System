const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./config/connection')
require ('console.table')

function mainMenu (){
    inquirer 
    .prompt([
        { type: 'list',
        message: 'What would you like to do?',
        name: 'option',
        choices: ['View all departments', 'view all roles', 'View all employees', 'Update an employee role', 'Add a department', 'Add a roll', 'Add an employee', 'Quit'], 
    }
    ]). then((answers) => {
        switch(answers.option){
            case 'View all departements':
                viewAllDepartements()
                break;

                    case 'View all employees':
                    viewAllEmployees()
                    break;
                  
                    case 'Add a department': 
                    addADepartment()
                    break;
                  
                    case  'Add a roll':
                    addARoll()
                    break;
                            
                    case  'Add an employee':
                    addAnEmployee()
                    break;
                  
                    case 'Update an employee role':
                    updateEmployeeRole()
                    break;  
        }
    })
}
mainMenu()
