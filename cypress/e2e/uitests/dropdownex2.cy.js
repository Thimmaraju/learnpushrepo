/// <reference types="cypress" />

describe("select box", () => {

    it("should load website with select box", () => {
      
       
  Cypress.on("uncaught:exception", (err, runnable) => {
  
    return false;
  });

      cy.visit("https://chercher.tech/practice/dropdowns");
      cy.get("#order-changed").select(3);
    });
    
  });


  // Cypress.on("uncaught:exception", (err, runnable) => {
  //   // returning false here prevents Cypress from
  //   // failing the test
  //   return false;
  // });