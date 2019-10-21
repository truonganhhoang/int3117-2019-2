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

	cy  .get("#user_email")
    	.type(email)
    	.should("have.value", email);

	cy  .get("#user_password")
    	.type(password)
    	.should("have.value", password);

	cy.get("#new_user").submit();

	cy.wait(3000);
});


Cypress.Commands.add("createSetOfQuestions", (nameValue, radioButtonValue) => {
	cy.contains("Thêm...").click();

	// Type name value
	if (nameValue == ""){

		cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > input')
			.clear();
	}else{

		cy  .get('#createFolderModal > div > div > form > div.modal-body > div:nth-child(1) > input')
			.type(nameValue);
	}  
        
    // Check or uncheck set of question option
    if (radioButtonValue == true){

    	cy.get('form').find('[value="1"]').check();
    }else{

    	//cy.get('form').find('[value="1"]').uncheck();
    }    
    
    //Click create button
    cy.get('#createFolderModal > div > div > form > div.modal-footer > input').click();
});