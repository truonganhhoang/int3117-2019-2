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

const users = [
    {
        "email" : "laiducminh1002@gmail.com",
        "password" : "Ineedyou~123"
    },
    {
        "email" : "giaovien1@sachmem.vn",
        "password" : "giaovien1@123"
    }
]
Cypress.Commands.add('login', () => {
    cy.visit('https://hoclieu.sachmem.vn');
    cy.contains('Đăng nhập').click();
    let user = users[0];
    cy.get('#user_email').type(user.email);
    cy.get('#user_password').type(user.password).type("{enter}");
}) 