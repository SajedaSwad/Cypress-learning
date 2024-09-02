///<reference types="cypress"/>

it("file upload demo", () => {
  cy.visit("https://trytestingthis.netlify.app/");
  // cy.get("#myfile").attachFile("example.json"); //there is an error here
  // cy.get("#myfile").attachFile("image(1).png"); //there is an error here
});
