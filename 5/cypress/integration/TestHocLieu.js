/// <reference types = "Cypress" />


describe("TestcaseListForHocLieu.vn", ()=>{
    beforeEach(()=>{
        cy.visit("https://hoclieu.sachmem.vn")
        cy.get("a#link-login")
            .click()
        cy.get("#user_email").type(Cypress.config('user_email'))
        cy.get('#user_password').type(Cypress.config('user_password'))
        cy.get("#new_user").submit()
        cy.get("[href='/live_class/class/5cfdf60a81522b4e06d1f9fc/assignments?status_mark=mark']").click()
        cy.contains("Danh sách người học").click()
        
    })

    it("checkValueDefaulOfComboboxStatus",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .find("span.ng-value-label")
            .should("have.text", "Hoạt động")      
    })
        
        

    it("checkListValueOfComboboxStatus",()=>{
        cy
        .get("table > thead th>ng-select[bindvalue='value']")
        .click()
        
        cy
            .get("ng-dropdown-panel")
            .find("span.ng-option-label")
            .then(elements=>{
                let texts = elements.text()
                expect(texts).to.equal("Hoạt độngĐã xóa")
            })
    })

    it("checkClickOptionDaXoaInCombobox",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)

        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .find("span.ng-value-label")
            .should("have.text", "Đã xóa")
    })

    it("checkDataWhenClickOptionDaXoaInCombobox",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)
        cy
            .get("table > tbody >tr td")
            .contains("vietnamican@gmail.com")
    })

    it("checkHaveButtonKichhoat",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)
        cy
            .contains("Kích hoạt")
        
    })

    
    it("checkWhenClickButtonKichHoat",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)
        cy
            .contains('td', 'vietnamican@gmail.com').parent('tr')
            .contains("Kích hoạt")
            .click()
            .get(".bootbox.modal.fade.bootbox-confirm.show")
            .get(".modal-content")
            .get(".bootbox-body")
            .should("have.text","Xác nhận cho học sinh trở lại lớp?")
    })


    it("checkClickExitOnConfirmModal",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)

        cy
            .contains('td', 'vietnamican@gmail.com').parent('tr')
            .contains("Kích hoạt")
            .click()
            .get(".bootbox.modal.fade.bootbox-confirm.show")
            .get(".modal-content")
            .get(".bootbox-body")
            .should("have.text","Xác nhận cho học sinh trở lại lớp?")

        cy  
            .get(".bootbox.modal.fade.bootbox-confirm.show")
            .get(".modal-content")
            .get(".modal-body")
            .get(".bootbox-close-button.close")
            .click()
            
    })

    it("checkClickButtonHuyOnConfirmModal",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)

        cy 
            .get("table>tbody") 
            .contains('td', 'vietnamican@gmail.com').parent('tr')
            .contains("Kích hoạt")
            .click()
        cy
            .get(".bootbox.modal.fade.bootbox-confirm.show")
            .get(".modal-dialog")
            .get(".modal-content")
            .get(".modal-footer")
            .get(".btn.btn-secondary.bootbox-cancel")
            .contains("Hủy")
            .click()
    })


    it("checkKichHoatChoMotHocVienDaXoa",()=>{
        cy
            .get("table > thead th>ng-select[bindvalue='value']")
            .click()
        cy
            .get("ng-dropdown-panel")
            .click()
            .wait(100)
    
        cy 
            .get("table>tbody") 
            .contains('td', 'vietnamican@gmail.com').parent('tr')
            .contains("Kích hoạt")
            .click()
        cy
            .get(".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary")
            .click()
            .wait(100)
        cy
            .get("table>tbody> tr td")
            .should("not.have.text","vietnamican@gmail.com")
    })

    

})