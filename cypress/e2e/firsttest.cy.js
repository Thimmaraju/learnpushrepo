///<reference types="cypress"/>

describe("Orange HRM Tests", () => {


    beforeEach(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    });


    it("login test- Valid credentials", () => {

        //cy.get("xyz").click()
        cy.get("#txtUsername").type("Admin");
        cy.get("#txtPassword").type("admin123");
        cy.get("#btnLogin").click();
        cy.url().should('include', '/index.php/dashboard');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
        //or 
        cy.location('href').should('include', '/index.php/dashboard')

        //or
        cy.location().its('href').should('include', '/index.php/dashboard')
    })


    it('Validate login with invalid credentials', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get("t").type("Admkjfrjfin")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click();

        cy.get('#spanMessage').should('be.visible')
    })
})




