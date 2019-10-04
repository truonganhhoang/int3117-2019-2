context('Kiểm thử chức năng giao bài tập', () => {
    beforeEach(() => { // Đăng nhập trước mỗi ca kiểm thử
        cy.visit('https://hoclieu.sachmem.vn')
        cy.contains('Đăng nhập').parent().click()
        cy.get('#user_email').type('giaovien1@sachmem.vn')
        cy.get('#user_password').type('giaovien1@123')
        cy.get('[name="commit"]').click()
    })
    it('Giao bài tập bằng kho học liệu - 1', function () {
        cy.get('li:nth-child(4) > div.w-100 > a').click() // Chọn 'kho học liệu'
        cy.get('li:nth-child(1) > div > div.col-9.node-name > a').click() // Chọn lớp (Khác)
        cy.get('li:nth-child(2) > div.position-relative > img').click()// Chọn tài liệu muốn giao
        // lỗi: trên test chỉ hiển thị 3 sách thay vì 4 như trên web
        cy.get('li:nth-child(8) > div > div.w-8 > div > i').click()// Chọn icon 'răng cưa' ở tiêu đề phần muốn giao
        cy.get('li:nth-child(8) > div > div.w-8 > div > div > a').click({force: true}) // Chọn 'giao bài tập'
        // lỗi: "cannot read property 'split' of underfind" trên web
    })
    it('Giao bài tập bằng kho học liệu - 2', function () {
        cy.get('li:nth-child(4) > div.w-100 > a').click()// Chọn 'kho học liệu'
        cy.get('li:nth-child(2) > div > div.col-9.node-name > a').click()// Chọn lớp (các lớp 1,2,..)
        cy.get('li:nth-child(2) > div.position-relative > img').click()// Chọn tài liệu muốn giao
        cy.get('li:nth-child(4) > div > div.w-92 > div > span').click()//Chọn phần muốn giao bài
        cy.get('div.pull-right > a > span').click({force: true})// Chọn giao bài tập
        // lỗi: "cannot read property 'split' of underfind" trên web
    })
    it('Giao bài tập bằng Thư mục của tôi - 1', function () {
        cy.get('li:nth-child(3) > div.w-100 > a').click()// Chọn 'thư mục của tôi'
        // Không có bài kiểm tra để giao nên không test tiếp được
    })

})
