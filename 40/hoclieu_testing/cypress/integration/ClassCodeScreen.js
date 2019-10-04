describe('Get class code', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('open qr-code screen', () => {
        // Select class 1
        cy.contains('Lop 1').click()
        // Click class code
        cy.get('.fa-qrcode').click()
        // Should be on a new URL which includes '/invite_code'
        cy.url().should('include', '/invite_code')
    })
    it('Refresh code', () => {
      // Select class 1
      cy.contains('Lop 1').click()
      // Click class code
      cy.get('.fa-qrcode').click()
      // click switch code
      cy.get('.fa-refresh').click()
      // Show notify success
      cy.get('div.toast-success').should('exist')
    })
    it('show qr-code history', () => {
      // Select class 1
      cy.contains('Lop 1').click()
      // Click class code
      cy.get('.fa-qrcode').click()
      // click switch code
      cy.get('.fa-history').click()
      // Show history dialog
      cy.get('div#codeHistoriesModal').should('exist')
    })
    it('Switch activity', () => {
      // Select class 1
      cy.contains('Lop 1').click()
      // Click class code
      cy.get('.fa-qrcode').click()
      // click switch activity
      cy.get('.slider').click()
      // Show dialog
      cy.get('div#toast-container').should('exist')
    })
    // Lớp học test 1

    it('open qrcode screen', () => {
      // Select class 1
      cy.contains('Lớp học test 1').click()
      // Click class code
      cy.get('.fa-qrcode').click()
      // Should be on a new URL which includes '/invite_code'
      cy.url().should('include', '/invite_code')
  })
  it('Refresh code', () => {
    // Select class 1
    cy.contains('Lớp học test 1').click()
    // Click class code
    cy.get('.fa-qrcode').click()
    // click switch code
    cy.get('.fa-refresh').click()
    // Show notify success
    cy.get('div.toast-success').should('exist')
  })
  it('show qr-code history', () => {
    // Select class 1
    cy.contains('Lớp học test 1').click()
    // Click class code
    cy.get('.fa-qrcode').click()
    // click switch code
    cy.get('.fa-history').click()
    // Show history dialog
    cy.get('div#codeHistoriesModal').should('exist')
  })
  it('Switch activity', () => {
    // Select class 1
    cy.contains('Lớp học test 1').click()
    // Click class code
    cy.get('.fa-qrcode').click()
    // click switch activity
    cy.get('.slider').click()
    // Show dialog
    cy.get('div#toast-container').should('exist')
  })
})    
