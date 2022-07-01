describe('checkbox Test', function () {
    // test case
    it('Test Case2', function (){
       cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
       // checking by values
       cy.get('input[type="checkbox"]')
       .check(['Manual Tester','Automation Tester']);

       cy.wait(5000)


       // unchecking all values
       cy.get('input[type="checkbox"]').uncheck();
       cy.wait(5000)


       // checking and assertion combined with and()
       cy.get('input[value="Automation Tester"]')
       .check().should('be.checked').and('have.value','Automation Tester');

       cy.wait(5000)


       // unchecking and assertion combined with and()
       cy.get('input[value="Automation Tester"]')
       .uncheck().should('not.be.checked');
    });
 });