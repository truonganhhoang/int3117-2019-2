context("Log in", () => {
  it("Log in", () => {
    cy.visit("https://hoclieu.sachmem.vn")
    cy.contains("Đăng nhập").click();
    cy.get("#user_email")
      .type("giaovien1@sachmem.vn")
      .should("have.value", "giaovien1@sachmem.vn");
    cy.get("#user_password")
      .type("giaovien1@123")
      .should("have.value", "giaovien1@123");
    cy.get("#new_user > div:nth-child(6) > input").click();
    cy.url().should('include', 'https://hoclieu.sachmem.vn/');
  });

  it('My List class', () => {
    cy.get('.fa-lg').click()
  })
});
  