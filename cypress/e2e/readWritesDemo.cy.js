before(() => {
  cy.fixture("example.json").as("test_data"); //alais,  all info in example.json become in var test-data
});

it("Read files using fixture", () => {
  cy.fixture("example.json").then((data) => {
    //all info we get from the example .json file it store in data
    cy.log(data.name);
    cy.log(data.email);
  });

  // cy.log(test_data.name); //for some reason it not work
});

/////

it("read file using readFile()", () => {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
  });
});
