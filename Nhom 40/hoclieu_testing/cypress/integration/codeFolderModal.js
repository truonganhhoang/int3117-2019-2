describe('Get class code', () => {
  beforeEach(() => {
    cy.login()
  })

  it('open modal after click', () => {
    // Click dropDown to show hidden menu
    cy.get('a#optionDropdown.dropdown-toggle').first().click()
    // Click first dropDown Item (Mã tham gia lớp học)
    cy.get('a[data-target="#codeFolderModal"]').first().click()
    cy.get('div#codeFolderModal').should('exist')
  })

  it('Notify success after switch', () => {
    // Click dropDown to show hidden menu
    cy.get('a#optionDropdown').first().click()
    // Click first dropDown Item (Mã tham gia lớp học)
    cy.get('a[data-target="#codeFolderModal"]').first().click()
    // Click switch code
    cy.get('input#switch-id.switch').click()
    // Show notify success
    cy.get('div.toast-success').should('exist')
  })
  // Open classes
  it('Click class 1', () =>{
    cy.contains('Lop 1').click()
    // Should be on a new URL which includes '/class/5d90214c2d66d550626de90d/assignments'
    cy.url().should('include', '/class/5d90214c2d66d550626de90d/assignments')
  })

  it('Click class test 1', () =>{
    cy.contains('Lớp học test 1').click()
    // Should be on a new URL which includes '/class/5d94baba2675db39fb93cb7e/assignments'
    cy.url().should('include', '/class/5d94baba2675db39fb93cb7e/assignments')
  })

  it('Click class 2', () =>{
    cy.contains('Lớp học test 1').click()
    // Should be on a new URL which includes '/class/5d94bad72675db39fb93cb7f/assignments'
    cy.url().should('include', '/class/5d94bad72675db39fb93cb7f/assignments')
  })

  it('Click class test', () =>{
    cy.contains('Test').click()
    // Should be on a new URL which includes '/class/5d95d56eec4e443482b3b835/assignments'
    cy.url().should('include', '/class/5d95d56eec4e443482b3b835/assignments')
  })

  it('Close modal after open', () => {
    // Click dropDown to show hidden menu
    cy.get('a#optionDropdown').first().click()
    // Click first dropDown Item (Mã tham gia lớp học)
    cy.get('a[data-target="#codeFolderModal"]').first().click()
    // Click close
    cy.get('.btn-secondary').click()
    cy.get('div#codeFolderModal').should('invisible')
  })
  // switch-id

  it('Check activity', () => {
    // Click dropDown to show hidden menu
    cy.get('a#optionDropdown').first().click()
    // Click first dropDown Item (Mã tham gia lớp học)
    cy.get('a[data-target="#codeFolderModal"]').first().click()
    // Click switch activity
    cy.get('.switch-id').click()
    cy.get('div#toast-container').should('invisible')
  })

})
