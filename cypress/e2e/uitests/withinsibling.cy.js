///<reference types="cypress"/>

describe('Automation - Working Parent, Children, sibling, within, Previous, next ', function () {

    it('Cypress Test Case - Parent, Children, sibling, within, Previous, next methods', function () {
  
      cy.visit('http://qa.way2automation.com');

     cy.url().should('include', '/index.php');
    // Parent
    cy.get('#load_box').find('input').invoke('attr', 'type').its('length').then((elelength) =>{

        cy.log(elelength)
    })

    //children

    cy.get('#load_box > form > fieldset ').children('input').should('not.have', 'hidden').its('length').then((elelength) =>{

        cy.log(elelength)
    })

    // within / Section / Block

    cy.get("#load_box > form > fieldset").within((section) =>{

        cy.get('input').its('length').should('eq', 6)

        cy.get('input').eq(2).type("Automatio Learning")
        cy.get('input').eq(2).prev().then((label) =>{

            cy.log(label.text())
        })

        // cy.get('input[name="xyz"]',{ timeout : 15000}).type("7207774066")

    })

    })

  })