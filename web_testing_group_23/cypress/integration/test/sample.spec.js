describe('Kiem tra dang nhap', function() {

    context('Đăng nhập', function(){
        it('Test case đăng nhập thành công', function(){
            cy.visit('https://hoclieu.sachmem.vn');
            cy.contains('Đăng nhập').click();
            cy.get('#user_email').type('giaovien1@sachmem.vn'); // type email
            cy.get('#user_password').type('giaovien1@123'); // type password
            cy.get('#new_user > div:nth-child(6) > input').click();
            cy.contains('Lớp học của tôi').click();
            cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');

        })
    })
})
// npm run cypress:open