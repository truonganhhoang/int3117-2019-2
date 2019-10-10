
context('Kiểm thử chức năng tạo đề kiểm tra', () => {

    beforeEach(() => { // Đăng nhập trước mỗi ca kiểm thử
        cy.visit('https://hoclieu.sachmem.vn');
        cy.contains('Đăng nhập').click();
        cy.get('#user_email').type('giaovien1@sachmem.vn')
        cy.get('#user_password').type('giaovien1@123')
        cy.get('#new_user > div:nth-child(6) > input').click()
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);
        cy.contains('Thư mục của tôi').click({force: true})// Vào thư mục để tạo đề kiểm tra
        cy.contains('Tạo đề kiểm tra').click({force: true})

    })
    it.skip('Tạo đề kiểm tra - Của tôi', function () {
        cy.get("div:nth-child(1) > select").select("Của tôi")
        cy.get('div:nth-child(2) > select').select("Lớp 9")
    })

    it('Tạo đề kiểm tra - Có sẵn 1', function () {
        cy.get('div:nth-child(2) > select').select("Lớp 4")
        cy.get("div:nth-child(3) > select").select("Bài kiểm tra của tôi")
        cy.get('div:nth-child(1) > textarea').clear().type("Tiêu đề trái")
        cy.get('div:nth-child(2) > textarea').clear().type("Tiêu đề phải")
        cy.get('div.col-md-12.input-group.form-group.mt-2 > input').click() //Lọc
        cy.get('div:nth-child(1) > ng-select > div > div > div.ng-input').click()// phonetic
        cy.get('div:nth-child(2) > div.ng-option.ng-option-marked').click()
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(2) > ng-select > div > div > div.ng-input').click()// grammar
        cy.contains("Present Simple").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(9) > ng-select > div > div > div.ng-input')
        cy.contains("Lớp 4").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('des-test > div:nth-child(2) > div > a').click() // thêm phần
        cy.get('div:nth-child(6) > a').click()// thêm mục
        cy.get('div:nth-child(2) > div:nth-child(2) > input').clear().type('Bài kiểm tra')
    })
    it('Tạo đề kiểm tra - Có sẵn 2', function () {
        cy.get('div:nth-child(2) > select').select("Lớp 9")
        cy.get("div:nth-child(3) > select").select("Bài kiểm tra học kỳ I")
        cy.wait(5000)
    })
    it('Tạo đề kiểm tra - Có sẵn 3', function () {
        cy.get('div:nth-child(2) > select').select("Lớp 12")
        cy.get("div:nth-child(3) > select").select("Bài kiểm tra học kỳ II")
        cy.get('div:nth-child(1) > textarea').clear().type("Họ và tên")
        cy.get('div:nth-child(2) > textarea').clear().type("Thời gian: 90 phút")

    })
    it('Tạo đề kiểm tra - Có sẵn 4', function () {
        cy.get('div:nth-child(2) > select').select("Lớp 3")
        cy.get("div:nth-child(3) > select").select("Đề thi đánh giá năng lực đầu ra bậc I")
        cy.get('div:nth-child(1) > textarea').clear().type("Họ và tên")
        cy.get('div:nth-child(2) > textarea').clear().type("Đề thi đánh giá năng lực đầu ra bậc I \n Thời gian: 90 phút")
        cy.get('div.col-md-12.input-group.form-group.mt-2 > input').click() //Lọc
        cy.get('div:nth-child(9) > ng-select > div > div > div.ng-input').click() // grade
        cy.contains("Lớp 3").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(7) > ng-select > div > div > div.ng-input').click() // difficult
        cy.contains("Medium").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(12) > ng-select > div > div > div.ng-input').click() // type
        cy.contains("Multiple choice (more than one corect)").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
    })
    it('Tạo đề kiểm tra - Có sẵn - đầy đủ', function () {
        cy.get('div:nth-child(2) > select').select("Lớp 9")
        cy.get("div:nth-child(3) > select").select("Đề thi đánh giá năng lực đầu ra bậc II")
        cy.get('div:nth-child(1) > textarea').clear().type("Họ và tên: \n Lớp:")
        cy.get('div:nth-child(2) > textarea').clear().type("Đề thi đánh giá năng lực đầu ra bậc II \n Thời gian: 90 phút")
        cy.get('div.col-md-12.input-group.form-group.mt-2 > input').click() //Lọc
        cy.get('div:nth-child(9) > ng-select > div > div > div.ng-input').click() // grade
        cy.contains("Lớp 9").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.get('div:nth-child(7) > ng-select > div > div > div.ng-input').click() // difficult
        cy.contains("Hard").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('div:nth-child(2) > div.col-md-6.border-right.scroll.d-print-none').scrollTo('bottom')
        cy.contains('Thêm Phần').click() // thêm phần 2
        cy.contains('Thêm Mục').click()// thêm mục 2
        cy.get('div:nth-child(2) > div:nth-child(5) > input').clear().type('5')
        cy.get('div:nth-child(7) > input').clear().type('5')
        cy.get('div:nth-child(3) > div.col-3.input-group.form-group > input').clear().type('5')
        cy.get('div:nth-child(2) > div:nth-child(2) > input').clear().type('Reading')
        cy.get('div:nth-child(3) > div:nth-child(2) > input').clear().type('Writing')
        cy.get('div:nth-child(2) > div:nth-child(3) > input').click() // lọc cho cả phần 1
        cy.get('div:nth-child(14) > ng-select > div > div > div.ng-input').click()// media
        cy.contains("Text").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('div:nth-child(3) > div:nth-child(3) > input').click() // lọc cho cả phần 2
        cy.get('div:nth-child(14) > ng-select > div > div > div.ng-input').click()// media
        cy.contains("Text").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('div:nth-child(2) > div:nth-child(4) > input').click() // lọc câu hỏi 1
        cy.get('div:nth-child(12) > ng-select > div > div > div.ng-input').click() // type
        cy.contains("Multiple choice (more than one corect)").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
        cy.get('div:nth-child(6) > input').click()// lọc câu hỏi 2
        cy.get('div:nth-child(12) > ng-select > div > div > div.ng-input').click() // type
        cy.contains("Single choice (MCQ)").click({force: true})
        cy.get('div.modal.fade.in.show > div > div > div.modal-header').click()// bấm vào khoảng trắng
        cy.contains('Áp dụng').click({force: true}) // kết thúc lọc
    })
    afterEach(() => { // Đăng nhập trước mỗi ca kiểm thử
        cy.contains('Tạo đề').click({force: true})
        cy.wait(5000)
    })



})
