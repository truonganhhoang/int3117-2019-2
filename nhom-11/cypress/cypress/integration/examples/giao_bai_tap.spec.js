
context('Kiểm thử chức năng giao bài tập', () => {
    Cypress.Commands.add('login', (email, password) => {
        cy.request({
            method: 'POST',
            url: 'https://accounts.sachmem.vn/users/sign_in',
            body: {
                user: {
                    email,
                    password
                }
            }
        })
            .then((res) => {
                window.localStorage.setItem('jwt', res.body.user.token)
            })
    })
    beforeEach(() => { // Đăng nhập trước mỗi ca kiểm thử
        cy.visit('https://hoclieu.sachmem.vn');
        cy.contains('Đăng nhập').click();
        cy.get('#user_email').type('giaovien1@sachmem.vn')
        cy.get('#user_password').type('giaovien1@123')
        cy.get('#new_user > div:nth-child(6) > input').click()
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);
        cy.get('#userDropdown > span').should('contain', 'Viên');

    })
    it('Giao bài tập bằng kho học liệu - 1', function () {
        cy.contains('Kho học liệu').click({force: true}).click() // Chọn 'kho học liệu'
        cy.get('li:nth-child(1) > div > div.col-9.node-name > a').click() // Chọn lớp (Khác)
        cy.get('li:nth-child(2) > div.position-relative > img').click()// Chọn tài liệu muốn giao
        // lỗi: trên test chỉ hiển thị 3 sách thay vì 4 như trên web
        cy.get('li:nth-child(8) > div > div.w-8 > div > i').click()// Chọn icon 'răng cưa' ở tiêu đề phần muốn giao
        cy.get('li:nth-child(8) > div > div.w-8 > div > div > a').click({force: true}) // Chọn 'giao bài tập'
        // lỗi: "cannot read property 'split' of underfind" trên web
    })
    it('Giao bài tập bằng kho học liệu - 2', function () {
        cy.contains('Kho học liệu').click({force: true}).click()// Chọn 'kho học liệu'
        cy.get('li:nth-child(2) > div > div.col-9.node-name > a').click()// Chọn lớp (các lớp 1,2,..)
        cy.get('li:nth-child(2) > div.position-relative > img').click()// Chọn tài liệu muốn giao
        cy.get('li:nth-child(4) > div > div.w-92 > div > span').click()//Chọn phần muốn giao bài
        cy.contains('Giao bài tập').click({force: true})// Chọn giao bài tập
        // lỗi: "cannot read property 'split' of underfind" trên web
    })
    it('Giao bài tập bằng thư mục của tôi - 2', function () {
        cy.contains('Thư mục của tôi').click({force: true})// Chọn 'thử mục của tôi'
        cy.get('li:nth-child(6) > div > div.col-3.small.text-right.text-info > span.dropdown > a#optionDropdown').click()// Chọn đề
        cy.get('div#dropdown_5 > a:nth-child(4)').click()// Chọn giao bài tập
        // lỗi: "cannot read property 'split' of underfind" trên web
    })

})
