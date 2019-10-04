/// <reference types="Cypress" />

describe('Nhóm 32 - Test case "xem kết quả làm bài "', function () {

  context('Đăng nhập & load danh sách lớp học', function () {
    beforeEach(function () {
      cy.visit('https://hoclieu.sachmem.vn');
    })
    
    it('Test login sucessfully', function () {
      cy.contains('Đăng nhập').click();
      cy.url().should('include', 'https://accounts.sachmem.vn');
      cy.wait(2000)
      cy.get('#user_email').type('giaovien1@sachmem.vn');
      cy.get('#user_password').type('giaovien1@123');
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Viên');
    })

    it('Test loading list of classes failed with icon loading assertion', () => {
      // login
      cy.contains('Đăng nhập').click();
      cy.url().should('include', 'https://accounts.sachmem.vn');
      cy.wait(2000)
      cy.get('#user_email').type('giaovien1@sachmem.vn');
      cy.get('#user_password').type('giaovien1@123');
      cy.get('#new_user > div:nth-child(6) > input').click();
      // click list of classes
      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000);
      cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(1) > div.w-100 > a')
      .click()
      cy.wait(2000)
      // assertion icon loading
      cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > app-loader > div')
        .find('i')
    })
  })
})
