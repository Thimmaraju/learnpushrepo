// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', (usernmame, password) => { 


    cy.xpath('//input[@id="txtUsername"]').type(usernmame);
    cy.get('#txtPassword').type(password);
    cy.get('#btnLogin').click();

 })

 Cypress.Commands.add("clickonelement", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).click();
    }
    else {
      cy.get(element).click();
    }
  })

  
Cypress.Commands.add("forceclickonelement", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).click({ force: true });
    }
    else {
      cy.get(element).click({ force: true });
    }
  })

  Cypress.Commands.add("enterText", (element, value) => {
    if (element.includes("//")) {
      cy.xpath(element).type(value);
    }
    else {
      cy.get(element).type(value);
    }
  })
  
  Cypress.Commands.add("clickoncontains", (element) => {
    cy.contains(element).click();
  
  })
  
  
  Cypress.Commands.add("forceclickoncontains", (element) => {
    cy.contains(element).click({ force: true });
  
  })
  
  Cypress.Commands.add('validateText', (element, value) => {
  
    if (element.includes("//")) {
      cy.xpath(element).should('have.text', value)
    }
    else {
      cy.get(element).should('have.text', value)
    }
  });
  
  Cypress.Commands.add("elementToVisible", (element) => {
    if (element.includes("//")) {
      cy.xpath(element, { timeout: 10000 }).should('be.visible');
    }
    else {
      cy.get(element, { timeout: 10000 }).should('be.visible');
    }
  })
  
  Cypress.Commands.add("elementToNotVisible", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).should('be.not.visible');
    }
    else {
      cy.get(element).should('be.not.visible');
    }
  })
  
  Cypress.Commands.add("elementTodisabled", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).should('be.disabled');
    }
    else {
      cy.get(element).should('be.disabled');
    }
  })
  
  Cypress.Commands.add("elementToNotdisabled", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).should('not.be.disabled');
    }
    else {
      cy.get(element).should('not.be.disabled');
    }
  })
  
  Cypress.Commands.add("selectDropDownValue", (element, value) => {
    if (element.includes("//")) {
      cy.xpath(element).select(value);
    }
    else {
      cy.get(element).select(value);
    }
  })
  
  Cypress.Commands.add("elementToNotExists", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).should('not.exist');
    }
    else {
      cy.get(element).should('not.exist');
    }
  });
  
  Cypress.Commands.add("elementToExists", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).should('exist');
    }
    else {
      cy.get(element).should('exist');
    }
  });
  
  Cypress.Commands.add("CheckAndClick", (dialog, element) => {
  
    cy.get('body').then(($body) => {
      if ($body.find(dialog).length > 0) {
        if (element.includes("//")) {
          cy.xpath(element).click({ force: true })
        }
        else {
          cy.get(element).click({ force: true })
        }
      }
    })
  });
  
  
  Cypress.Commands.add("scroll", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).scrollIntoView();
    }
    else {
      cy.get(element).scrollIntoView();
    }
  })
  
  Cypress.Commands.add("scrollAndClick", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).scrollIntoView().click();
    }
    else {
      cy.get(element).scrollIntoView().click();
    }
  })
  
  Cypress.Commands.add("validateAttribute", (element, attribute, attributevalue) => {
    if (element.includes("//")) {
      cy.xpath(element).should('have.attr', attribute, attributevalue );
    }
    else {
      cy.get(element).should('have.attr', attribute, attributevalue);
    }
  })
  
  
  Cypress.Commands.add('fileupload', (element, fixturefilepath) => {
    if (element.includes("//")) {
      cy.xpath(element).attachFile(fixturefilepath);
    }
    else {
      cy.get(element).attachFile(fixturefilepath);
    }
  })
  
  Cypress.Commands.add('containsText', (element, value) => {
    if (element.includes("//")) {
      cy.xpath(element).should('include.text', value)
    }
    else {
      cy.get(element).should('include.text', value)
    }
  })
  
  Cypress.Commands.add("MouseoverAndclickButton", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).trigger('mouseover').click();
    }
    else {
      cy.get(element).trigger('mouseover').click();
    }
  })
  
  Cypress.Commands.add("ScrollNelementToVisible", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).scrollIntoView().should('be.visible');
    }
    else {
      cy.get(element).scrollIntoView().should('be.visible');
    }
  })
  
  
  Cypress.Commands.add("multipleClick", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).click({ multiple: true})
    }
    else {
      cy.get(element).click({multiple: true})
    }
  })
  
  
  Cypress.Commands.add("UncheckElement", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).uncheck({force: true});
    }
    else {
      cy.get(element).uncheck({force: true});
    }
  });
  
  Cypress.Commands.add("CheckElement", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).check({force: true});
    }
    else {
      cy.get(element).check({force: true});
    }
  });
  Cypress.Commands.add("containstextvisible", (element) => {
    cy.contains(element).should('be.visible');
  
  })
  
  
  Cypress.Commands.add("cleartext", (element) => {
    if (element.includes("//")) {
      cy.xpath(element).clear({force: true});
    }
    else {
      cy.get(element).clear({force: true});
    }
  })
  
