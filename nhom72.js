describe('Xem danh sách bài tập', function() {

    it('Test đăng nhập', function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('	giaovien1@sachmem.vn'); // type email
      cy.get('#user_password').type('giaovien1@123'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();
		 cy.wait(1000); 
    })
    


    it("Test thêm thư mục ", function(){
    	cy.get(':nth-child(3) > .w-100 > .text-dark').click();
    	cy.get('.col-12 > [data-toggle="modal"]').click();
    cy.get('#createFolderModal > .modal-dialog > .modal-content > form.ng-untouched > .modal-body > :nth-child(1) > .form-control').type('Tốt hơn nên gọi Bắc');
     cy.get(':nth-child(2) > .form-check-label > .form-check-input').click();
	 cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
		 cy.get('form.ng-dirty > .modal-footer > .btn-secondary').click(); //nếu có thì hủy
		 cy.wait(1000); 
    })
	
	
	
})



