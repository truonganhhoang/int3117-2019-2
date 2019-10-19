context('Kiểm thử chức năng xem câu hỏi trong 1 lớp học', () => {
    Cypress.Commands.add('login', (email, password) => {
        cy.request({
            method: 'POST',
            url: 'https://accounts.sachmem.vn/users/sign_in',
            body: {
                user: {
                    email,
                    password
                }
            }
        })
            .then((res) => {
                window.localStorage.setItem('jwt', res.body.user.token)
            })
    })

    beforeEach(() => { // Đăng nhập trước mỗi ca kiểm thử
        cy.visit('https://hoclieu.sachmem.vn')
        cy.contains('Đăng nhập').parent().click()
        cy.visit('https://hoclieu.sachmem.vn');
        cy.contains('Đăng nhập').click();
        cy.get('#user_email').type('giaovien1@sachmem.vn')
        cy.get('#user_password').type('giaovien1@123')
        cy.get('[name="commit"]').click()

        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);

        cy.get(':nth-child(1) > .w-100').should('contain', 'Lớp học của tôi')

    })
    


    it('Xem danh sách câu hỏi trong lớp 1', function(){
       cy.get(':nth-child(1) > .w-100 > .text-dark').click();
       cy.get(':nth-child(2) > .row > .col-9 > .text-dark pl-1').click(); // click vào lớp thứ 1 trong danh sách
       })

    it('Xem danh sách câu hỏi trong lớp 2', function(){
       cy.get(':nth-child(1) > .w-100 > .text-dark').click(); // click vào "Lớp học của tôi"
       cy.get(':nth-child(3) > .row > .col-9 > .text-dark pl-1').click(); // click vào lớp thứ 2 trong danh sách
       })
    
    it('Xem danh sách câu hỏi trong lớp 3', function(){
       cy.get(':nth-child(1) > .w-100 > .text-dark').click();
       cy.get(':nth-child(4) > .row > .col-9 > .text-dark pl-1').click(); // click vào lớp thứ 3 trong danh sách
       })
    

})



