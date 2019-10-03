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

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get("#link-login").click();
  cy.url().should("eq", "https://accounts.sachmem.vn/users/sign_in");
  cy.get("#user_email")
    .type(Cypress.env("email"))
    .should("have.value", Cypress.env("email"));
  cy.get("#user_password")
    .type(Cypress.env("password"))
    .should("have.value", Cypress.env("password"));
  cy.get("#new_user").submit();
  cy.wait(1000);
});
