

describe('Automation - Working with Alerts', function () {

    before(() =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    })

    it('Cypress Test Case - Simple Alert', function () {

        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (text) =>{

            expect(text).equal('I am a JS Alert')
        })
      
    })

    it('Cypress Test Case - test Confirm Alert - Cancel', function () {

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () =>{

            return false;
        })
      
    })

    
    it('Cypress Test Case - test Confirm Alert - Ok', function () {

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () =>{

            return true;
        })
      
    })

    it('Cypress Test Case - test prompt Alert - Ok', function () {

        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns("Javascript class");
            cy.contains('Click for JS Prompt').click();
        })
      
    })

    it.only('Cypress Test Case - test prompt Alert - Cancel', function () {

        cy.window().then((win)=>{

            cy.stub(win, 'prompt').callsFake( () => null)
            cy.contains('Click for JS Prompt').click();
        })
      
    })



  })

