///<reference types="cypress"/>

import register from "../../fixtures/onefixture.json"
describe('Automation Test Suite - Understanding Fixtures', function () {

    

    it('Cypress Test Case - Understanding Fixtures', function () {
  
      
      cy.visit('https://shop.demoqa.com/my-account/');
      cy.wait(5000)
      //cy.get('#reg_username').type(register.Username);
      cy.enterText("#reg_username", register.Username)
      cy.wait(5000)
      //cy.get('#reg_email').type(register.Email);
      cy.enterText("#reg_email", register.Email)
      cy.wait(5000)
      //cy.get('#reg_password').type(register.Password)
      cy.enterText('#reg_password',register.Password)
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //or
      //cy.get('.woocommerce-Button').should('be.disabled');

      cy.elementTodisabled('.woocommerce-Button')
      cy.wait(5000)
      cy.get('#reg_password').clear();
      cy.wait(5000)
      // Clicking on to register on the Website by entering new password 
      cy.get('#reg_password').type(register.NewPassword);
      cy.wait(15000)
      //cy.get('.woocommerce-Button').click();
  
      cy.clickonelement('.woocommerce-Button')
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', register.Username);
      //or

      cy.get('#username').should('have.attr', 'value', register.Username);
    })


  })
  
