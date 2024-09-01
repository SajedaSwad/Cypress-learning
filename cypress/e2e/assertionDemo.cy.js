
//implicit assertion

// it("assertion",()=>{
//     cy.visit('https://example.cypress.io')
//     cy.wait(2000)
//     cy.contains('get').click()
//     cy.wait(2000)
//     cy.get('#query-btn')
//     .should('contain','Button')//should contain ->the text it have 
//     .should('have.id','query-btn')//should have .class .id .text .html
//     .should('be.visible')//should-be   .visible  .disabled be.focused == have.focus 
//     //should-equal  .invoke('attr','id').should('equal','class-name')

//     //and -> chained assertion 
//     //instead of writing an should we can write and 
//     // .and('contain','Button')
//     // .and('have.id','query-btn')
//     // .and('be.visible')

// })

//explicit assertion 

// expect
it ("explicit assertion",()=>{
    cy.visit('https://example.cypress.io')
    cy.wait(2000)
    expect(true).to.be.true 
    // assert.strictEqual(4,'4','...')//false -> mean ===


})
//              .to.be.equal('')
//              .to.be.a('string')
//              .to.be.false
//              .to.be.null
//              .to.exist
//              .to.be.a('string')

// assert      
// assert.equal(4,4,'...')//true
// assert.equal(4,5,'...')//false
// assert.equal(4,'4','...')//true
// assert.strictEqual(4,'4','...')//false
// assert.equal
// assert.notEqual
// assert.isAbove
// assert.isBelow
// assert.exists
// assert.notExists
// assert.true 
// assert.false 
// assert.isString 
// assert.isNotNumber

