describe('TestChat', function() {
    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click({force: true});
      cy.get('input#user_email').type('giaovien1@sachmem.vn'); 
      cy.get('input#user_password').type('giaovien1@123');
      cy.get('#new_user > div:nth-child(6) > input').click({force: true});
    })
    
    //test case cho đoi ma lop hoc chi can 1 test case la du
    it('Test changge code class', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5db2ea705f1bd828957953c3/assignments');
      cy.wait(2000);
      cy.contains(" Mã tham gia lớp học").click();
      cy.contains("Đổi mã").click();
    })

    // 4 test case cho chuc nang gui thong bao cho hoc sinh qua email
    it('Test case 1 push noti email', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5db2ea705f1bd828957953c3/assignments');
      cy.wait(2000);
      cy.contains("Student list").click();
      cy.contains("Chức năng").click();
      cy.contains(" Gửi thông báo mời tham gia lớp...").click();
      cy.get('textarea[formcontrolname="emails"]').type('emailhocsinh1@hoclieu.com');
      cy.get('textarea[formcontrolname="contents"]').type('thong bao gui hoc sinh 1');
      cy.get('input[value="Gửi thông báo"]').click();
    })
    it('Test case 2 push noti email', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5db2ea705f1bd828957953c3/assignments');
      cy.wait(2000);
      cy.contains("Student list").click();
      cy.contains("Chức năng").click();
      cy.contains(" Gửi thông báo mời tham gia lớp...").click();
      cy.get('textarea[formcontrolname="emails"]').type('emailhocsinh2@hoclieu.com');
      cy.get('textarea[formcontrolname="contents"]').type('thong bao gui hoc sinh 2');
      cy.get('input[value="Gửi thông báo"]').click();
    })
    it('Test case 3 push noti email', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5db2ea705f1bd828957953c3/assignments');
      cy.wait(2000);
      cy.contains("Student list").click();
      cy.contains("Chức năng").click();
      cy.contains(" Gửi thông báo mời tham gia lớp...").click();
      cy.get('textarea[formcontrolname="emails"]').type('emailhocsinh3@hoclieu.com');
      cy.get('textarea[formcontrolname="contents"]').type('thong bao gui hoc sinh 3');
      cy.get('input[value="Gửi thông báo"]').click();
    })
    it('Test case 4 push noti email', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5db2ea705f1bd828957953c3/assignments');
      cy.wait(2000);
      cy.contains("Student list").click();
      cy.contains("Chức năng").click();
      cy.contains(" Gửi thông báo mời tham gia lớp...").click();
      cy.get('textarea[formcontrolname="emails"]').type('emailhocsinh4@hoclieu.com');
      cy.get('textarea[formcontrolname="contents"]').type('thong bao gui hoc sinh 4');
      cy.get('input[value="Gửi thông báo"]').click();
    })
    
  })
})