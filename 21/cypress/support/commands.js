Cypress.Commands.add('visitAndSignIn', () => {
	cy.visit('/');

	cy.contains("Đăng nhập").click();

	cy.url().should("eq", "https://accounts.sachmem.vn/users/sign_in");

	cy.get('input[name="user[email]"]')
		.click()
		.type('giaovien1@sachmem.vn')
		.should('have.value', 'giaovien1@sachmem.vn');

	cy.get('#user_password')
		.click()
		.type('giaovien1@123')
		.should('have.value', 'giaovien1@123')
		.type('{enter}');

	cy.contains("Lớp học của tôi").click();
});

