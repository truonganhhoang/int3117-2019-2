describe('Kiem tra dang nhap', function() {

    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn'); // type email
      cy.get('#user_password').type('giaovien1@123'); // type password
      cy.get('input[type="submit"]').click();
    })

    it('Test case xóa bài tập', function(){
      cy.visit('https://hoclieu.sachmem.vn/live_class/class/5d97fc1be3620d3005dedddb/assignments');
      cy.get('body').then($body => {
        var baitap = $body.find('a[id="#optionDropDown"]').length 
        for(var i = 0; i < baitap; i++) {
          cy.get('a[id="#optionDropDown"]').eq(0).click()
          cy.wait(500)
          cy.get('[class="dropdown-item"]').click()
          cy.wait(500)
          cy.get('[class="btn btn-primary bootbox-accept"]').click()
				  cy.wait(1000)
        }
      })
      cy.get("body").find('[class="list-group-item"]').should('have.length', 0)
    })
  })
})