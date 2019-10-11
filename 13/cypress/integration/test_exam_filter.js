describe('Kiểm tra chức năng quản lý kết quả với học sinh', function() {
    beforeEach(function(){

      //Đăng nhập
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('davidricharduet@gmail.com'); // type email
      cy.get('#user_password').type('chienuetvnu300198'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
       cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Chiến'); // type user_name
    })


    it('Test thống kê kết quả học tập', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/overview_summary');
        cy.wait(2000);
    })

    it('Test kiểm tra tình hình học tập #1', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d960893ec4e443482b3b99b/student_overview');
        cy.wait(2000);
    })

    it('Test kiểm tra tình hình học tập #2', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d95d56eec4e443482b3b835/student_overview');
        cy.wait(2000);
    })

    it('Test kiểm tra chi tiết bài làm #1', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d960893ec4e443482b3b99b/assignment/5d961eaaec4e443482b3ba54/assignment_detail/5c31f35f2e628108e1e8edff');
        cy.wait(2000);
    })

    it('Test kiểm tra chi tiết bài làm #2', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d960893ec4e443482b3b99b/assignment/5d961ed1ec4e443482b3ba58/assignment_detail/5c31f35f2e628108e1e8ee00');
        cy.wait(2000);
    })

})
