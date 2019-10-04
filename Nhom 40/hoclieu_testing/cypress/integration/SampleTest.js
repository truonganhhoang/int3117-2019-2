describe('Get class code', () => {
    beforeEach(() => {
      cy.login()
    })
    // login to class manage screen
    it('open classes manager screen', () => {
        cy.url().should('include', '/live_class/classes')
    })

    it('open class manager screen', () => {
      // Click class
      cy.get('.pl-1').click()
      cy.url().should('include', '/live_class/class')
    })
}) 
   