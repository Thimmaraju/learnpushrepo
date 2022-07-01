describe('Example to demo conditional testing in cypress', () => {
    beforeEach(() => {
        cy.visit('https://wikipedia.org')
    })

    it('Check that if you find WikiVoyage on the page, then click on it and validate (Go to If)', () => {
        cy.title().should('eq', 'Wikipedia')
        cy.wait(3000)
        cy.get('body').then((body) => {
            if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {

                cy.get('[data-jsl10n="wiktionary.name"]').invoke('text').then((txt)=>{

                    cy.writeFile('cypress/fixtures/test4.json', { extractedtxt: txt })
                
                  })
        
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
            }
        })

        cy.wait(3000)
        cy.title().should('eq', 'Wikivoyage')
    })

    it('Check that if you dont find WikiVoyage in the page, then click on Wiktionary and validate (Go to Else)', () => {
        cy.title().should('eq', 'Wikipedia')
        cy.wait(3000)
        cy.get('body').then((body) => {
            if (body.find('wrongLocator').length > 0) {
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
            }
        })
        cy.wait(3000)
        cy.title().should('eq', 'Wiktionary')
    })
})