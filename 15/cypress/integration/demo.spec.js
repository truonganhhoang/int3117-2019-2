describe('Thêm sinh viên vào nhóm', () => {
    beforeEach(() => {
        cy.login();
    })

    it("Thêm sinh viên vào nhóm", function() {
        cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d96f5e6ec4e443482b3c207/list_groups')

        // cy.get("li:nth-child(1) > div.w-100 > div.mt-1 > a").click();

        // cy.get("i.fa.fa-group").click(); 
        cy.get("table.table.table-border > tbody > tr > td:nth-child(3) > i.fa.fa-edit.pl-3.text-blue-custom").click();

        cy.contains("Chọn học sinh").parent().click();

        cy.get(".ng-option").not(".ng-option-selected").first().click();

        cy.contains("Lưu").click();

        cy.get('div#toast-container').should('exist')
    })
})
