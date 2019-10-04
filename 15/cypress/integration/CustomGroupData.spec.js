describe('Chỉnh sửa danh sách thành viên nhóm', () => {
    beforeEach(() => {
        cy.login();
    })

    it("Thêm sinh viên vào nhóm", function() {
        cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d96f5e6ec4e443482b3c207/list_groups')

        cy.get("table.table.table-border > tbody > tr > td:nth-child(3) > i.fa.fa-edit.pl-3.text-blue-custom").first().click();

        cy.contains("Chọn học sinh").parent().click();

        cy.get(".ng-option").not(".ng-option-selected").first().click();

        cy.contains("Lưu").click();

        cy.get('div#toast-container').should('exist')
    })

    it("Xóa sinh viên trong nhóm", function() {
        cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d96f5e6ec4e443482b3c207/list_groups')

        cy.get("table.table.table-border > tbody > tr > td:nth-child(3) > i.fa.fa-edit.pl-3.text-blue-custom").first().click();

        cy.get(".ng-value-icon").contains("×").first().click();

        cy.contains("Lưu").click();

        cy.get('div#toast-container').should('exist')
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
