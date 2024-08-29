
//implicit assertion
it("assertion",()=>{
    cy.visit('https://example.cypress.io')
    cy.wait(2000)
    cy.contains('get').click()
    cy.wait(2000)
    cy.get('#query-btn')
    .should('contain','Button')//should contain ->the text it have 
    .should('have.id','query-btn')//should have .class .id .text .html
    .should('be.visible')//should-be   .visible  .disabled be.focused == have.focus 
    //should-equal  .invoke('attr','id').should('equal','class-name')

    //and -> chained assertion 
    //instead of writing an should we can write and 
    // .and('contain','Button')
    // .and('have.id','query-btn')
    // .and('be.visible')

})