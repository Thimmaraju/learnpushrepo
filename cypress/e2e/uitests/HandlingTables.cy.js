///<reference types="cypress"/>

describe('Automation - Working With Tables in webpage', function () {

    it('Cypress Test Case - Understanding Tables in webpage', function () {

        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices');

        cy.get('.dataTable >tbody tr').should('have.length', '30');
        cy.get('.dataTable >tbody tr:first-child td').should('have.length', '6');

        //Get row data and Validate column text

        cy.get('.dataTable >tbody tr').eq(0).within(() => {

            cy.get('td').eq(2).then((ele) => {

                cy.log(ele.text())
            })

            cy.get('td').eq(0).should('contain.text', 'Asian Paints')

        })

        //Validate data based on Cell Values 

        cy.get('.dataTable >tbody').contains('Bajaj Finance Ltd').parent().parent().within(() => {

            cy.get('td').eq(2).then((ele) => {

                cy.log("Current Price is " + ele.text())
            })
        })

        // Get entire Table Data
        cy.get('.dataTable >tbody tr')
        .each((rows)=>{

            cy.wrap(rows).within((celldata)=>{

                cy.log(celldata.text())
            })
        })

    })

})


        //cy.get('.datatable tr').should('have.length', 4)

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

        