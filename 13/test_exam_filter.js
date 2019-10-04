describe('Kiem tra chuc nang loc lop hoc', function() {
  

  context('Kiem tra chuc nang loc lop hoc', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('davidricharduet@gmail.com'); // type email
      cy.get('#user_password').type('chienuetvnu300198'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();


      cy.url().should('include', 'https://hoclieu.sachmem.vn');
       cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Chiến'); // type user_name
    })


    it('Test case load lop hoc', function(){
      cy.contains("Lớp học của tôi").click();
      cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
        cy.wait(2000);
      //khong tiep tuc duoc vi khong hien len lop hoc
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d960893ec4e443482b3b99b/assignments');
        cy.wait(2000);
      //khong tiep tuc duoc vi khong hien danh sach bai tap cung nhu UI nut
    })
  })


})

