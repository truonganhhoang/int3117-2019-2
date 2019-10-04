describe('Doi ten hien thi cua lop hoc', function() {

  context('test1', function(){
  beforeEach(function(){
    cy.visit('https://hoclieu.sachmem.vn');
  })

  it('Test case Nhập tên hiển thị của lớp học mới - nhấn Cập nhật', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //click button dropdown
    cy.contains('Đổi tên hiển thị').click();
    cy.get('input.btn-primary').type('Lớp kiểm thử'); //type a new name
    cy.contains('Cập nhật').click();
    cy.get('#toast-container').should('contain', 'Đổi tên hiển thị thành công'); // display success toast
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', 'Lớp kiểm thử');
  })

  it('Test case Nhập tên hiển thị của lớp học mới - nhấn Hủy', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //click button dropdown
    const beforeName = cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').invoke('text');//curren display name
    cy.contains('Đổi tên hiển thị').click();
    cy.get('input.btn-primary').type('Lớp kiểm thử'); //type a new name
    cy.contains('Hủy').click();
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', beforeName);
  })

  it('Test case Nhập tên hiển thị của lớp học mới - nhấn X (Close)', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //click button dropdown
    const beforeName = cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').invoke('text');//curren display name
    cy.contains('Đổi tên hiển thị').click();
    cy.get('input.btn-primary').type('Lớp kiểm thử'); //type a new name
    cy.get('#updateNameClassModal > div > div > div > button').click(); // click button X (close)
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', beforeName);
  })

  it('Test case Không nhập tên mới - nhấn Cập nhật', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //click button dropdown
    const beforeName = cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').invoke('text');//curren display name
    cy.contains('Đổi tên hiển thị').click();
    cy.contains('Cập nhật').click();
    cy.get('#toast-container').should('contain', 'Đổi tên hiển thị thành công'); // display success toast
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', beforeName);
  })

  it('Test case Không nhập tên mới - nhấn Hủy', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //click button dropdown
    const beforeName = cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').invoke('text');//curren display name
    cy.contains('Đổi tên hiển thị').click();
    cy.contains('Hủy').click();
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', beforeName);
  })

  it('Test case Không nhập tên mới - nhấn X (Close)', function(){
    cy.contains('Lớp học của tôi').click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
    cy.wait(2000);
    cy.get('#optionDropdown').click(); //cy.get button dropdown
    const beforeName = cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').invoke('text'); //curren display name
    cy.contains('Đổi tên hiển thị').click();
    cy.get('#updateNameClassModal > div > div > div > button').click(); // cy.get button X (Close)
    cy.get('body > app-root > div.content-bound > div > div > div > app-list-class > div:nth-child(2) > ul > li > div > div.col-md-9.col-12.node-name > a > span').should('contain', beforeName);
  })
})
})