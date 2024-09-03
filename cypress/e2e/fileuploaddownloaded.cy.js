/// <reference types="cypress-downloadfile"/>

it("file upload demo", () => {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("example.json");
  // cy.get("#myfile").attachFile("image(1).png");
});

/////
// it("file download test", () => { in vidie 4
//   cy.downloadFile(
//     "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
//     "mydownloads",
//     "example.jpg"
//   );
// });
