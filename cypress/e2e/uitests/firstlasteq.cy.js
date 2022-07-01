///<reference types="cypress"/>

describe('Automation - Working First(), last(), eq() methods ', function () {

    it('Cypress Test Case - First(), last(), eq() methods', function () {
  
      cy.visit('http://qa.way2automation.com');

     cy.url().should('include', '/index.php');

     cy.get('#load_box > #load_form > fieldset:nth-child(5) > input[type=text]').type('Raju');

     cy.get('#load_form > fieldset:nth-child(5) > input[type=text]').last().type('Raju');

    cy.get('#load_form > fieldset:nth-child(5) > label').eq(0).then((label) =>{

        cy.log(label.text())
    })

    })

  })