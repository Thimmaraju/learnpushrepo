import Loginpage from '../pageObjects/clientPO/loginPage.po'

import data from "../../fixtures/profile.json"

///<reference types="cypress"/>

const login = new Loginpage()
describe("Orange HRM Tests", () => {


    beforeEach(function () {
        cy.visit(Cypress.env("clientUrl"));
    });


    it("login test- Valid credentials ", () => {
       cy.login(data.name, data.password)
        cy.url().should('include', '/index.php/dashboard');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
        // //or 
       cy.location('href').should('include', '/index.php/dashboard')

        // //or
        // cy.location().its('href').should('include', '/index.php/dashboard')
    })

    it('Validate login with invalid credentials', () => {

        cy.login(data.wrongName, data.wrongpassword)

        cy.get(login.errorMessage()).should('be.visible')
    })
})




