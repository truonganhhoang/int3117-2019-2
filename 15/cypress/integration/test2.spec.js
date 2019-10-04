describe('Chỉnh sửa nhóm của sinh viên', () => {
    beforeEach(() => {
        cy.login();
    })

    it("Thêm nhóm cho sinh viên", function() {
        cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d96f5e6ec4e443482b3c207/students')

        cy.get("i.fa.fa-edit.text-blue-custom").first().click();

        cy.contains("Chọn nhóm").parent().click();

        cy.get(".ng-option").not(".ng-option-selected").first().click();

        cy.contains("Lưu").click();

        cy.get('div#toast-container').should('exist')
    })   

    it("Xóa nhóm cho sinh viên", function() {
        cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d96f5e6ec4e443482b3c207/students')

        cy.get("i.fa.fa-edit.text-blue-custom").first().click();

        cy.get(".ng-value-icon").contains("×").first().click();

        cy.contains("Lưu").click();

        cy.get('div#toast-container').should('exist')
    })   
})
