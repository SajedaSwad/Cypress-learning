///  <reference types ="cypress"/> 
it("Google search",()=>{
cy.visit('http://google.com')
cy.get('#APjFqb',{timeout:6000}).type("automation step by step {Enter}")
cy.wait(2000)
cy.contains('فيديوهات').click()
// cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click() click on google search button 
})