// Kiem tra thong bao xoa

describe('Common TC_F_03', function () {

    before('Đăng nhập vào học liệu', function () {
        cy.visit('https://hoclieu.sachmem.vn')

            .contains('Đăng nhập').click()

            .get("input[name='user[email]']").clear().type("giaovien1@sachmem.vn")

            .get("input[name='user[password]']").type("giaovien1@123").type("{enter}");

        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);

        cy.contains('Lớp học của tôi').click();
    })

})