describe("visiting webpage using cypress", () => {


    before(function () {
      cy.log("before All");
      });


    after(function () {
      cy.log( "after All" );
    });


    beforeEach(function () {
      cy.log("before each" );
    });


    afterEach(function () {
      cy.log("after each" );
    });


    it.skip("should visit the page", () => {
      cy.log("1st IT block");
      cy.visit("https://www.google.com/");
    });

    it.skip("dummy block", () => {
      cy.log("2nd IT block");
    });

    it("dummy block 3", () => {
        cy.log("3rd IT block");
      });
  });