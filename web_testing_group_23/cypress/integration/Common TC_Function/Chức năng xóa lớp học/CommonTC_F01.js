// Hien thong bao xac nhan xoa

describe('Common TC_F_01', function () {

    beforeEach(() => {
        cy.login();
    })
    context('Window', function () {
        it('CommonTC_F_01 hiện thông báo xác nhận xóa', function () {
            cy.contains('Lớp học của tôi').click();
            cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
            cy.wait(2000);
            cy.get('#dropdown').click();

            cy.contains("Xóa lớp học ").click();
            cy.contains('Lớp 22').get('#optionDropdown').click({ force: true });
        })
    })
})

