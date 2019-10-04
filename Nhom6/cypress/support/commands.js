// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");

  cy.get("#link-login").click();

  cy.url().should("eq", "https://accounts.sachmem.vn/users/sign_in");

  cy.get("#user_email")
    .type(email)
    .should("have.value", email);

  cy.get("#user_password")
    .type(password)
    .should("have.value", password);

  cy.get("#new_user").submit();

  cy.wait(1000);
});


Cypress.Commands.add("deleteGroups", function () {
  cy.wait(1000);

  cy.visit("/live_class/class/5d932e66202f2f613cdd987b/list_groups/", {
    retryOnStatusCodeFailure: true,
    timeout: 10000
  });

  cy.wait(1000)

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
})
