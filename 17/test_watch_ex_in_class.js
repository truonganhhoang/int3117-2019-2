describe('Xem danh sách bài tập', function() {

    it('đăng nhập', function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn'); // type email
      cy.get('#user_password').type('giaovien1@123'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();
    })
    


    it('Xem danh sách bài tập trong 1 lớp', function(){
      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.get(':nth-child(1) > .w-100 > .text-dark').click(); // click vào "Lớp học của tôi"
    
      // xử lý ngoại lệ
      // tham khảo "https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions"
      cy.on('uncaught:exception', (err, runnable) => {
      
      done();
      return false;
      

      // nguyên nhân gây ra lỗi
      // click vào lớp đầu tiên trong danh sách
      cy.get(':nth-child(2) > .row > .col-9 > .text-dark pl-1').click();
    })
    })
    

})



