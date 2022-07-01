///<reference types="cypress"/>

describe('Automation - File Upload Example - 2', function () {

    it.only('Cypress Test Case - Understanding upload file - 2', function () {
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      //cy.get('#file-upload').attachFile('module1/test1.txt');
      cy.fileupload("#file-upload",'module1/test1.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('test1.txt')
    
    })

    it.only('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=", "cypress/Karthik/downloads" , "tajmahal.jpg" )
      
      })

  })