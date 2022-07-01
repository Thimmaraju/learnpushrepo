///<reference types="cypress"/>

describe('Automation - Working With Tabs in webpage', function () {

    it('Cypress Test Case - Understanding Tabs in webpage', function () {

             
  Cypress.on("uncaught:exception", (err, runnable) => {
  
    return false;
  });

  
      cy.visit('https://www.cypress.io/');

      cy.wait(5000);
      
      cy.xpath('(//a[@href="https://docs.cypress.io"])[2]').invoke('removeAttr','target').click()
      cy.wait(5000);

     cy.url().should('include', 'https://docs.cypress.io/guides/overview/why-cypress')

    
      
    })

  })