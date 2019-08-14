describe('Page search user', function() {
  it('Should I search the user and click in see commits', function() {
    cy.visit('http://localhost:3001/')
    cy.get('.input')
        .type('LeticiaSoares')
        .should('have.value','LeticiaSoares')
   cy.get('.search-user')
        .should('not.disabled')
        .click()
   cy.get('.list-commits')
       .should('be.exist')
   cy.get('.list-commits')
          .should('be.exist')
           .find(':first-child')
           .find('a').click()
    cy.url().should('include', '/commits')
  })
})