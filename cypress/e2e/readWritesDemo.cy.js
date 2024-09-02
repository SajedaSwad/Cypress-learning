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

////
it("write file demo", () => {
  cy.writeFile("sample.txt", "hello im sajeda\n");
  cy.writeFile("sample.txt", "hello im learning cypress", { flag: "a+" }); //to add this in file with out removing or overwrite on file
  // cy.writeFile(
  //   "or jsut write the relative path for the file i want to write on it ",
  //   "hello im sajeda\n"
  // );
});
