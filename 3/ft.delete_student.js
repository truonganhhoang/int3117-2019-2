describe('Kiem tra dang nhap', function () {

    it('Test case đăng nhập thành công', function () {
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn')
      cy.get('#user_password').type('giaovien1@123')
      cy.get('#new_user > div:nth-child(6) > input').click()
      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000); 
      cy.get('#userDropdown > span').should('contain', 'Viên');
      cy.visit(
        "https://hoclieu.sachmem.vn/live_class/class/5d960752ec4e443482b3b991/students"
      );
    })

    it('Test xác nhận xóa học sinh trong lớp học', function () {
      cy.get('#565381')
        .then(() => {
          cy.contains('Xóa').click();
          cy.wait(2000);
          cy.contains('Xác nhận').click();
          cy.get('#565381').should('not.exist');
        })
    })

    it('Test học sinh bị xóa không tồn tại trong danh sách hoạt động', function(){
      cy.get('#565381').should('not.exist');
    })

})