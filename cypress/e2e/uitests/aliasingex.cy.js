

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  
    it('checks all checkboxes with one command', () => {
      cy.get('#check input[type="checkbox"]')
        .as('Raju')
        .check()
  
      cy.get('@Raju')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })
    })
  })
