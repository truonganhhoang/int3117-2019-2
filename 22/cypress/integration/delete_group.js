
describe('Xóa nhóm', function () {

    it('Test case đăng nhập', function () {
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn')
      cy.get('#user_password').type('giaovien1@123')
      cy.get('#new_user > div:nth-child(6) > input').click()
      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000); 
      cy.get('#userDropdown > span').should('contain', 'Viên');
      cy.visit(
        "https://hoclieu.sachmem.vn/live_class/class/5d98bd90e3620d3005dee1c0/list_groups"
      );
    })
    
    it('Test case xóa nhóm', function() {
       cy.get('table.table.table-border > tbody > tr:nth-child(1) > td:nth-child(3) > i.fa.fa-trash.pl-3.text-blue-custom').click();
	//cy.contains('button','Xác nhận').click();
	// Xóa nhóm ở vị trí số 1 
        cy.get('body > div > div > div > div > button.btn.btn-primary.bootbox-accept').click();
	cy.get('#toast-container').should('exist')
         
    })
     // Nếu không muốn xóa nhóm có thể nhấn icon dấu x 
     it('Test case chọn icon dấu x', function() {
     //cy.get('table.table.table-border > tbody > tr:nth-child(1) > td:nth-child(3) > i.fa.fa-trash.pl-3.text-blue-custom').click();
     cy.get('body > div > div > div > div > button.bootbox-close-button.close').click({force: true});
	
	})
	// Nếu không muốn tiếp tục xóa nhóm nhấn hủy 
     it('Test case hủy xóa nhóm', function() {
       	//cy.get('table.table.table-border > tbody > tr:nth-child(1) > td:nth-child(3) > i.fa.fa-trash.pl-3.text-blue-custom').click();
	//cy.contains('button','Hủy').click();
        cy.get('body > div > div > div > div > button.btn.btn-secondary.bootbox-cancel').click();
	cy.get('#toast-container').should('exist')
       
    })
})
