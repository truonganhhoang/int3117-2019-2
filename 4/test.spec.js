describe('Kiem tra tham gia làm bài tập', function() {

    context('tham gia lam bai tap', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
    })

    it('Test case khi nhập đầy đủ', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework invalid
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('Kiem thu 2019-2020'); // type class name
	  cy.get('.modal-body > div:nth-child(6) > input').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > input').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	it('Test case khi không nhập mã tham gia làm bài tập', function(){
      cy.contains('Tham gia làm bài tập').click(); // click để vào form điền
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('Kiem thu 2019-2020'); // type class name
	  cy.get('.modal-body > div:nth-child(6) > input').type('Password'); //type password
	  cy.contains('Lưu').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	
	it('Test case khi không nhập tên', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.modal-body > div:nth-child(5) > input').type('Kiem thu 2019-2020'); // type class name
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-invalid').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > input').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	
	it('Test case khi không tên lớp', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-invalid').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > input').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	it('Test case khi không nhập mật khẩu', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('Kiem thu 2019-2020'); // type class name
	  cy.contains('Lưu').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	it('Test case khi nhập đầy đủ đúng mã bài tập sai tên lớp', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('2019-2020'); // type class name
	  cy.get('.modal-body > div:nth-child(6) > input').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > input').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	it('Test case khi nhập đầy đủ đúng tên lớp sai mã làm bài tập', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('2019-2020'); // type class name
	  cy.get('.modal-body > div:nth-child(6) > input').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > input').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
	it('Test case khi nhập đầy đủ nhưng ấn nút hủy', function(){
      cy.contains('Tham gia làm bài tập').click();// click để vào form điền
      cy.get('.modal-body > div:nth-child(2) > input').type('KHQJo5'); // type code homework 
	  cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('Alie'); // type Your name
      cy.get('.modal-body > div:nth-child(5) > input').type('2019-2020'); // type class name
	  cy.get('.modal-body > div:nth-child(6) > input').type('Password'); //type password
	  cy.get('.ng-dirty.ng-touched.ng-valid > div:nth-child(2) > button').click();// click button lưu
	  cy.url().should('include', 'https://hoclieu.sachmem.vn');// visit main web
      cy.wait(2000);
    })
  })
})