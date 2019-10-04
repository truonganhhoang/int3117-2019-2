describe('Test 1', function() {
    it('clicking "type" navigates to a new url', function() {
      cy.visit('https://example.cypress.io/commands/querying')
  
      cy.get('.btn-primary').should('contain', 'Button')
    })
  })
