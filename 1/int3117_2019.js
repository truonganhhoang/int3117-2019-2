/**
 * Bài tập môn kiểm thử và đảm bảo chất lượng phần mềm
 * Nhóm 1
 * 
 * Tính năng:
 *  Chỉnh sửa tên tên bài kiểm tra
 * 
 */
describe('Edit example title', function() {
    beforeEach(function() {
        // runs before each test in the block
        // go to Hoclieu.vn
        cy.visit("https://hoclieu.sachmem.vn")
        cy.get('#link-login').click()
        // Login with teacher account
        cy.get('#user_email').type("giaovien1@sachmem.vn")
        cy.get('#user_password').type("giaovien1@123")
        cy.get('input[type="submit"]').click()
        //
        cy.get('a[href="/folder/my_folder/0"]').click()
        cy.wait(1000)
    })
    
    it('Normal case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).clear().type("Bài kiểm tra")
                .should('have.value', "Bài kiểm tra")
            cy.get('input[value="Cập nhật"]').click()
        })
    // Check result
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]') 
            .should('have.text', 'Bài kiểm tra');
    });

    it('Add more text case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).type(" 001")
            cy.get('input[value="Cập nhật"]').click()
        })
        // Check result
        cy.wait(1000)
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
            .then(($ele) =>{
                expect($ele.text()).to.include(' 001');
            })
    });
    
    it('Text empty case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).clear()
            cy.get('input[value="Cập nhật"]').click()
        })
    });

    it('Cancel rename case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).clear().type("Bài test 01")
            cy.get('button[class="btn btn-secondary"]').eq(1).click()
        })
    });

    it('Edit then cancel rename case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).clear().type("Bài test 02")
            cy.get('button[class="btn btn-secondary"]').eq(1).click()
        })
    });

    it('Close button click case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).type("Bài test 02")
            cy.get('div[id="renameFolderModal"]').find('button[class="close"]').then(($btn)=>{
                cy.get($btn).find('span').click()
            })
        })
    });

    it('Click outside case', function() {
        cy.get('a[href="/question_set/test/5d96bbb2ec4e443482b3bb7c/preview"]')
        .parents('li[class="list-group-item list-group-item-action"]').then(($row) => {
            cy.get($row).find('span[class="dropdown"]').click()
            cy.get($row).find('a[data-target="#renameFolderModal"]').click()
            cy.get('input[placeholder="Nhập tên"]').eq(1).type("Bài test 02")
            cy.get('div[id="renameFolderModal"]').click(80, 80)
        })
    });
  })