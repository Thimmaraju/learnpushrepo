///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('module1/test1.txt');
    // cy.fileupload("//input[@name='upfile']",'module1/test1.txt')
      cy.xpath('//input[@type="submit"]').click();
    
    })

  })