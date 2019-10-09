
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
    it('Tạo đề kiểm tra', function () {
        cy.contains('Thư mục của tôi').click({force: true})
        cy.contains('Tạo đề kiểm tra').click({force: true})
        cy.get('div:nth-child(2) > select').select("Lớp 4")
        cy.get("div:nth-child(3) > select").select("Bài kiểm tra của tôi")
        cy.get('div:nth-child(1) > textarea').clear().type("Tiêu đề trái")
        cy.get('div:nth-child(2) > textarea').clear().type("Tiêu đề phải")
        cy.get('div.col-md-12.input-group.form-group.mt-2 > input').click() //Lọc
        cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// phonetic
        cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        cy.get('div.modal-body.scroll > div:nth-child(1)').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(2) > ng-select > div > div > div.ng-input').click()// grammar
        cy.get('div.ng-option.ng-option-marked > span').click()
        cy.get('div.modal-body.scroll > div:nth-child(1)').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('des-test > div:nth-child(2) > div > a').click() // thêm phần
        cy.get('div:nth-child(6) > a').click()// thêm mục
        cy.get('div:nth-child(2) > div:nth-child(2) > input').clear().type('Bài kiểm tra')
        cy.contains('Tạo đề').click({force: true})
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// vocabulary
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// competency
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// comphension
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// production
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// difficult
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// competence
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// grade
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// unit
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// segment
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// type
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// complexity
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// media
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        // cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// format
        // cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()

        cy.wait(3000)
    })
    // it('Xóa thư mục', function () {
    //     cy.contains('Thư mục của tôi').click({force: true})
    //     cy.get('li:nth-child(3) > div > div.col-3.small.text-right.text-info > span > a#optionDropdown').click()
    //     cy.contains('Xóa thư mục').click({force: true})
    //     cy.contains("Xác nhận").click({force: true})
    //     cy.wait(3000)
    // })
    // it('Đổi tên đề kiểm tra', function () {
    //     cy.contains('Thư mục của tôi').click({force: true})
    //     cy.get('li:nth-child(5) > div > div.col-3.small.text-right.text-info > span.dropdown > a#optionDropdown').click()
    //     cy.contains('Đổi tên').click({force: true})
    //     cy.get('div#renameFolderModal div.modal-body > div > input').clear().type('Đề kiểm tra')
    //     cy.contains("Cập nhật").click({force: true})
    //     cy.wait(3000)
    // })
    // it('Đổi tên thư mục', function () {
    //     cy.contains('Thư mục của tôi').click({force: true})
    //     cy.get('li:nth-child(3) > div > div.col-3.small.text-right.text-info > span > a#optionDropdown').click()
    //     cy.contains('Đổi tên').click({force: true})
    //     cy.get('div#renameFolderModal div.modal-body > div > input').clear().type('Thư mục')
    //     cy.contains("Cập nhật").click({force: true})
    //     cy.wait(3000)
    // })



})
