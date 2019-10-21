describe("Test manage set of questions", () => {
    beforeEach(() => {

        //Sign in
        cy  .fixture("account.json").then(account => {
            cy  .login(account.email, account.password);
        });

        //Go to "Thư mục của tôi" page
        cy  .contains("Thư mục của tôi")
            .click();

        cy  .wait(1000);
    });


    it("test create set of questions: name field is empty", () => {
        cy  .createSetOfQuestions("", true);

        cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > div.error-text:contains("Trường này không được để trống")')
            .should("be.visible")
    });


    it("test create set of questions: all characters are space in name field", () => {
        cy  .createSetOfQuestions("    ", true);

        cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > div.error-text:contains("Trường này không được để trống")')
            .should("be.visible")
    });


    it("test create set of questions: name field contains special characters", () => {
        cy  .createSetOfQuestions("special characters ^^", true);

        cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > div.error-text:contains(Tên chỉ được chứa các chữ cái, chữ số, dấu cách, dấu "_")')
            .should("be.visible")
    });


    it("test create set of questions: name field contains more than 50 characters", () => {
        cy  .createSetOfQuestions("This sequence contains more than 50 characters hihi", true);

        cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > div.error-text:contains("Tên không được quá 50 ký tự")')
            .should("be.visible")
    });


    it("test create set of questions: name field just contains 50 characters", () => {
        cy  .createSetOfQuestions("This sequence just contains fifty characters ahihi", true);

        cy  .get('#toast-container:contains("Tạo thành công")')
            .should("be.visible")
    });
    

    it("test create set of questions: Uncheck radio button", () => {
        cy  .createSetOfQuestions("Valid value", false);

        cy  .get('#createFolderModal > div > div > form > div.modal-body > div.form-group > div.error-text:contains("Trường này không được để trống")')
            .should("be.visible")
    });

    /*
        Because "create set of questions" function is failure, we cannot navigative to detail page.
        => Cannot get element to perform auto-test for "create question" and "edit question" function
    */
})

