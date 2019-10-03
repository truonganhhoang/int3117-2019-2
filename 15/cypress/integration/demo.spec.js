describe('Login', () => {
    beforeEach(() => {
        cy.fixture("users/teacher").as("admin");
    })

    it("Should login successfully", function() {
        cy.visit("https://hoclieu.sachmem.vn");

        cy.get("#link-login.nav-link").click();

        cy.get("#user_email.form-control").type(this.admin.email);
        cy.get("#user_password.form-control").type(this.admin.password).type("{enter}");

        // cy.get(".text-dark").contains("Lớp học của tôi").click();
        cy.get("li:nth-child(1) > div.w-100 > div.mt-1 > a").click();

        cy.get("i.fa.fa-group").click(); 
    })
})
