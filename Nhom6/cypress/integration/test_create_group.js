describe("Test create group", () => {
  function deleteGroups() {
    cy.wait(1000);
    cy.visit("/live_class/class/5d932e66202f2f613cdd987b/list_groups/", {
      retryOnStatusCodeFailure: true,
      timeout: 10000
    });

    cy.get("app-list-group").then($group => {
      if ($group.find("table").length) {
        cy.get("td>i.fa-trash").each(element => {
          element.click();
        });
        cy.wait(500);
        cy.get("button.btn.bootbox-accept").each(element => {
          element.click();
        });
      }
    });

    cy.get(
        "body > app-root > div.content-bound > div > div > div > app-action > div > div.border-right.sidebar.open.mobile-closed > div:nth-child(5)"
    ).click();
    cy.url({ timeout: 20000 }).should("include", "/students");
  }

  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    deleteGroups();
  });

  it("Test insert empty group name", () => {
    deleteGroups();
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");
    cy.wait(2000);
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

    // cy.get(
    //   "#createGroup > div > div > form > div.modal-body > div > input"
    // ).type("");

    cy.get(
        "#createGroup > div > div > form > div.modal-footer > input"
    ).click();

    cy.get("#createGroup > div > div > form > div.modal-body > div").contains(
        "Trường này không được để trống"
    );
  });

  it("Test duplicate group name", () => {
    deleteGroups();
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");
    cy.wait(2000);
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
    cy.wait(2000);
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

  it("Test create successfully", () => {
    deleteGroups();
    cy.get('a:contains("Tạo nhóm)').should("not.be.visible");
    cy.wait(2000);
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
    cy.get("div#toast-container.toast-top-right.toast-container").contains(
        "Tạo nhóm thành công"
    );
    cy.get("#createGroup").should("be.hidden");
  });
});
