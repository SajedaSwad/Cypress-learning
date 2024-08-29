// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
//<reference type = "cypress"\> 
// const cypress = require("cypress")
// describe('My First Test', () => {
//   it('Does not do much!', () => { expect(true).to.equal(false)
//   })
// })
it("Google search",()=>{
cy.visit('http://google.com')
cy.get('#APjFqb').type("automation step by step {Enter}")
// cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click() click on google search button 
})