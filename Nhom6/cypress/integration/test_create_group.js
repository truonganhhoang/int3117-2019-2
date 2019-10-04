describe("Test create group", () => {
  beforeEach(() => {
    cy.fixture("teacher.json").then( teacher => {
      cy.login(teacher.email, teacher.password);
    });

    cy.deleteGroups();

    cy.get('div.action:contains("Danh sách người học")').click({});

    cy.wait(1000);

    cy.url({ timeout: 20000 }).should("include", "/students");
  });


  afterEach(() => {
    cy.deleteGroups();
  });


  it("test insert empty group name should raise an error", () => {
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    cy.get(
      "#createGroup > div > div > form > div.modal-footer > input"
    ).click();

    cy.get('#createGroup div.form-group div.error-text:contains("Trường này không được để trống")')
      .should("be.visible")
  });


  it("test duplicate group name should raise an error", () => {
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    cy.get(
      "#createGroup > div > div > form > div.modal-body > div > input"
    ).type("Nhóm 666");

    cy.get(
      "#createGroup > div > div > form > div.modal-footer > input"
    ).click();

    cy.get("#createGroup").should("be.hidden");

    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    cy.get(
      "#createGroup > div > div > form > div.modal-body > div > input"
    ).type("Nhóm 666");

    cy.get(
      "#createGroup > div > div > form > div.modal-footer > input"
    ).click();

    cy.get("#toast-container").should("contain.text", "Nhóm đã trùng tên");

    cy.get(
      '#createGroup > div > div > form > div.modal-footer > button:contains("Đóng")'
    ).click();

    cy.get("#createGroup").should("be.hidden");
  });


  it("test create successfully", () => {
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");

    cy.get("#616234")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').should("be.visible");

    cy.get("#616289")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    cy.get('a:contains("Tạo nhóm")').click();

    cy.get("#createGroup").should("be.visible");

    cy.get(
      "#createGroup > div > div > form > div.modal-body > div > input"
    ).type("Nhóm 666");

    cy.get(
      "#createGroup > div > div > form > div.modal-footer > input"
    ).click();

    cy.get("#toast-container").should("contain.text", "Tạo nhóm thành công");

    cy.get("#createGroup").should("be.hidden");
  });
});
