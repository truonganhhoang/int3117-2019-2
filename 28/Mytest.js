describe("Test first", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(function() {
        cy.visit("https://accounts.sachmem.vn/auth/sso/authorize?state=jQv87PNxMi4UdPd4aZRBrpy4iSEIlwmqIB7EFd6UukNaGzNo&redirect_uri=http://hoclieu.vn/user/auth?callback&client_id=sm_questions_key")
        cy.get('.alert > :nth-child(1)').click();
        cy.get('#user_email')
            .type("giaovien1@sachmem.vn")
            .should('have.value', 'giaovien1@sachmem.vn')

        cy.get('#user_password')
            .type("giaovien1@123")
            .should('have.value', 'giaovien1@123')
        cy.get(':nth-child(6) > .btn').click()
        cy.get(':nth-child(1) > .w-100 > .mt-1 > a').click()

        cy.get('.border-right > :nth-child(6)').click()
        cy.get('tr > :nth-child(1) > .fa').click()
        cy.get('.modal-body > .form-control').clear()
    })


    //LogIn and direct to funtion

    it('Test case 1', function() {
        cy.get('.modal-body > .form-control')
            .type("AA", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()
    })

    it("Test case 2", function() {
        cy.get('.modal-body > .form-control')
            .type("", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()

    })
    it("Test case 3", function() {
        cy.get('.modal-body > .form-control')
            .type("10", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()

    })
    it("Test case 4", function() {
        cy.get('.modal-body > .form-control')
            .type("aaaa", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()

    })
    it("Test case 5", function() {
        cy.get('.modal-body > .form-control')
            .type("@ Nhóm 1", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()

    })
    it("Test case 6", function() {
        cy.get('.modal-body > .form-control')
            .type("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", { force: true })
        cy.get('#editGroupNameModal > .modal-dialog > .modal-content > form.ng-valid > .modal-footer > .btn-primary').click()

    })







})