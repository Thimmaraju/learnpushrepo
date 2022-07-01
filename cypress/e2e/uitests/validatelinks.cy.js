///<reference types="cypress"/>

describe('Automation - Working With Links', function () {

    it('Cypress Test Case - Understanding Links and how to work with Links', function () {
  
      cy.visit('https://www.wikipedia.org/');

      cy.get('a').contains('Commons').click();
      cy.get('.mainpage-welcome-sitename').should('contain.text','Commons');

      cy.get('a').its('length').then((elelength) =>{

        cy.log(elelength)
      })

      cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength) =>{

        cy.log(elelength)
      })

      cy.get('.vector-menu-content-list').last().find('a').then((linktext) =>{

        cy.log(linktext.text())
      })
      
    })

  })




        // cy.get('.datatable tr').should('have.length', 4)

        //or

        // cy.get('.datatable tr').should(($tr) => {
        //     expect($tr).to.have.length(4)
        // })

        //or

        // cy.get('.datatable').then(($table) => {
        //     // synchronously query to find length of elements
        //     expect($table.find('td').length).to.equal(4)
        //   })

        //or

        // cy.get('[ng-repeat="item in catalog"]').then(($el) => { 
        //     const itemCount = Cypress.$($el).length;
        //     cy.log(itemCount)
        // })