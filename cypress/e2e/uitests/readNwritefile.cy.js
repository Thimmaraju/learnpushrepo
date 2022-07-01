///<reference types="cypress"/>

describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "V Softconsulting\n")
     
    })

    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it.only('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test4.json', { firstname: 'G', lastname: 'Thimmaraju'});
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/module2/test4.json').should('exist')
        cy.readFile('cypress/fixtures/module2/test4.json').its('lastname').should('eq','Thimmaraju')
        cy.readFile('cypress/fixtures/module2/test4.json').its('firstname').should('eq','G')
        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','V Softconsulting');
        cy.readFile('cypress/fixtures/module1/test4.txt').should('eq','V Softconsulting\nCypress Trainer')       
    })



  })