describe('Kiểm tra chức năng xóa đề kiểm tra', () => {
    it('Đăng nhập', () => {
        cy.visit('http://hoclieu.sachmem.vn')
        cy.contains('Đăng nhập').click()
        cy.get('#user_email').type('giaovien1@sachmem.vn')
        cy.get('#user_password').type('giaovien1@123')
        cy.get('#new_user > div:nth-child(6) > input').click()

    })
    it('Xóa đề kiểm tra', () => {
        cy.get(':nth-child(3) > .w-100 > .text-dark').click()
        cy.get(':nth-child(13) > .row > .col-3 > .dropdown > #optionDropdown').click()
        cy.wait(2000);
        cy.get('#dropdown_12 > :nth-child(2)').click()
        cy.contains('Xác nhận').click()
        cy.visit('https://hoclieu.sachmem.vn/folder/my_folder/0')
    })
    it('Xóa đề kiểm tra nhưng hủy xác nhận', () => {
        cy.get(':nth-child(12) > .row > .col-3 > .dropdown > #optionDropdown').click()
        cy.wait(2000)
        cy.get('#dropdown_11 > :nth-child(2)').click()
        cy.get('.modal-content > .modal-footer > .btn-secondary').click()
        cy.wait(2000)    })
    it('Xóa đề kiểm tra nhưng ấn x', () => {
        cy.get(':nth-child(12) > .row > .col-3 > .dropdown > #optionDropdown').click()
        cy.wait(2000)
        cy.get('#dropdown_11 > :nth-child(2)').click()
        cy.get('.bootbox-close-button').click()
        cy.wait(2000)
    })
    it('Xóa đề kiểm tra không tồn tại', () => {
        cy.get(':nth-child(20) > .row > .col-3 > .dropdown > #optionDropdown').click()
        cy.wait(2000)
        cy.get('#dropdown_19 > :nth-child(2)').click()
        cy.contains('Xác nhận').click()
    })
})