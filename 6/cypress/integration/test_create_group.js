describe("Test create group", () => {
  beforeEach(() => {

    //Sign in as teacher
    cy.fixture("teacher.json").then(teacher => {
      cy.login(teacher.email, teacher.password);
    });

    //Delete all existing groups
    cy.deleteGroups();

    //Access student list page
    cy.get('div.action:contains("Danh sách người học")').click({});

    //Wait for DOM loading
    cy.wait(1000);

    //Check for url validity
    cy.url({ timeout: 20000 }).should("include", "/students");
  });


  afterEach(() => {
    //Delete all created groups after testing
    cy.deleteGroups();
  });


  it("test insert empty group name should raise an error", () => {
    //Check button "Tạo nhóm" must be hidden
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    //Select first student
    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    //Check button "Tạo nhóm" must be visible
    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    //Select second student
    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    //Check dialog createGroup appears
    cy.get("#createGroup").should("be.visible");

    //Submit creating group without name
    cy.get(
      "#createGroup div.modal-footer>input"
    ).click();

    //Error message should appear
    cy.get('#createGroup div.form-group div.error-text:contains("Trường này không được để trống")')
      .should("be.visible")
  });


  it("test duplicate group name should raise an error", () => {
    //Check button "Tạo nhóm" must be hidden
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    //Select first student
    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    //Button should not be visible
    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    //Select first student
    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    //Modal should appear
    cy.get("#createGroup").should("be.visible");

    //Type in group name
    cy.get(
      "#createGroup form div.modal-body input"
    ).type("Nhóm 666");

    //Submit creating group
    cy.get(
      "#createGroup div.modal-footer>input"
    ).click();

    //Modal should disappear
    cy.get("#createGroup").should("be.hidden");

    //Button should not be visible
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    //Select a student
    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    //Select another student
    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    //Type in the existed name
    cy.get(
      "#createGroup form div.modal-body input"
    ).type("Nhóm 666");

    cy.get(
      "#createGroup div.modal-footer>input"
    ).click();

    //Error message should appear
    cy.get("#toast-container").should("contain.text", "Nhóm đã trùng tên");

    cy.get(
      '#createGroup form div.modal-footer>button:contains("Đóng")'
    ).click();

    cy.get("#createGroup").should("be.hidden");
  });


  it("test create successfully", () => {
    //Check button "Tạo nhóm" must be hidden
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    //Select first student
    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    //Select second student
    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    //Type in a unique name
    cy.get(
      "#createGroup form div.modal-body input"
    ).type("Nhóm 666");

    cy.get(
      "#createGroup div.modal-footer>input"
    ).click();

    //Success message should appear
    cy.get("#toast-container").should("contain.text", "Tạo nhóm thành công");

    cy.get("#createGroup").should("be.hidden");
  });
});
