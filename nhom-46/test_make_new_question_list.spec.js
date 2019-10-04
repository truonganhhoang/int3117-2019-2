describe('Tạo bộ câu hỏi', function () {
  context('Đăng nhập', function () {
    beforeEach(function () {
      cy.visit('https://hoclieu.sachmem.vn');
    })

    it('Test case đăng nhập thành công', function () {
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn'); // type email
      cy.get('#user_password').type('giaovien1@123'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Viên'); // type user_name

      //Click vào link Thư mục của tôi
      cy.contains('Thư mục của tôi').click()

      //Click nút Thêm
      cy.contains('Thêm').click()

      //Tạo bộ câu hỏi
      //Nhập tên bộ câu hỏi
      cy.get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > input').type('Toán 5');
      //Chọn bộ câu hỏi
      cy.get('form').find('[value="1"]').check();
      //Nhấn tạo
      cy.get('#createFolderModal > div > div > form > div.modal-footer > input').click();

      cy.contains('Tạo câu hỏi').click();

      questionList.forEach((question) => {
        //Tạo tên bộ câu hỏi
        cy.get('body > app-root > div.content-bound > div > div > div > teacher-manage-question > div:nth-child(2) > div.col-md-9.scroll > app-create-question > div.card > form > div.card-body > div > div > div:nth-child(1) > input')
          .type(question.title)
        cy.wait(6000)
          .get(".cke_wysiwyg_frame").should(function ($iframe) {
            const body = $iframe.contents().find("body").get(0)
            expect(body).to.be.ok
            cy.wrap(body).type(question.generalContent);
          })

        cy.wait(6000)
          .get(".cke_wysiwyg_frame").should(function ($iframe) {
            const body = $iframe.contents().find("body").get(0)
            expect(body).to.be.ok
            cy.wrap(body).type(question.mainContent);
          })
      })
    })
  })

})

const questionList = [
  { title: "Tổng hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "453 + 234 = ?" },
  { title: "Tổng hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "212 + 904 = ?" },
  { title: "Tổng hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "343 + 234 = ?" },
  { title: "Tổng hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "123 + 344 = ?" },
  { title: "Tổng hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "675 + 204 = ?" },
  { title: "Hiệu hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "424 - 323 = ?" },
  { title: "Hiệu hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "675 - 238 = ?" },
  { title: "Hiệu hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "478 - 334 = ?" },
  { title: "Hiệu hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "900 - 834 = ?" },
  { title: "Hiệu hai số có ba chữ số", generalContent: "Thực hiện phép tính sau", mainContent: "999 - 754 = ?" },
]