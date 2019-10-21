describe('Kiem tra loc danh sach lop', function() {

    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click({force: true});
      cy.get('input#user_email').type('giaovien1@sachmem.vn'); // type email
      cy.get('input#user_password').type('giaovien1@123'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click({force: true});
    })
    it("Test chỉnh sửa tên thư mục 0", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      //cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > div').should('contain', 'Trường này không được để trống');
    })
    it("Test chỉnh sửa tên thư mục 1", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type(' ');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Lỗi!');
    })
    it("Test chỉnh sửa tên thư mục 2", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('ten_thu_muc  123');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Thành công');
    })
    it("Test chỉnh sửa tên thư mục 3", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('  123454');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Thành công');
    })
    it("Test chỉnh sửa tên thư mục 4", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('_t');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Thành công');
    })
    it("Test chỉnh sửa tên thư mục 5", function(){
      cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
      cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
      cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('H');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Lỗi!');
    })
    it("Test chỉnh sửa tên thư mục 6", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('abcyz12435abcyz12435abcyz12435abcyz12455abcyz12435abcyz12435');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > div').should('contain', 'Tên không được quá 50 ký tự');
    })
    it("Test chỉnh sửa tên thư mục 7", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('ten_thu_muc@');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > div').should('contain', 'Tên chỉ được chứa các chữ cái, chữ số, dấu cách, dấu "_"');
    })

    it("Test chỉnh sửa tên thư mục 8", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(3) > div > div.col-3.small.text-right.text-info > span').click();
    	cy.get('#dropdown_2 > a:nth-child(1)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Thành công');
    })

//với bộ câu hỏi tương tự như vậy
    it("Test chỉnh sửa tên bộ câu hỏi", function(){
    	cy.get('body > app-root > div.content-bound > div > div > div > app-home > ul > li:nth-child(3) > div.w-100 > a').click();
    	cy.get('body > app-root > div.content-bound > div > div > div > my-folder > ul > li:nth-child(2) > div > div.col-3.small.text-right.text-info > span.dropdown').click();
    	cy.get('#dropdown_1 > a:nth-child(2)').click();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').clear();
      cy.get('#renameFolderModal > div > div > form > div.modal-body > div > input').type('hi');
      cy.get('#renameFolderModal > div > div > form > div.modal-footer > input').click();
      cy.get('#toast-container').should('contain', 'Thành công');
    })

    })
  })
