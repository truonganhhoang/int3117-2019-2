describe("my first test", () => {
  it("Log in", () => {
    cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('giaovien1@sachmem.vn'); // type email
      cy.get('#user_password').type('giaovien1@123'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();
  });

  it("Go to class and show list student", () => {
      cy.wait(3000);
      cy.get(':nth-child(1) > .w-100 > .mt-1 > a').click();
      cy.get('.border-right > :nth-child(5)').click();
      // cy.get('thead > :nth-child(2) > :nth-child(3) > .form-control').type("abc").then(()=> {
      //   cy.get('.table > tbody > tr > :nth-child(1)').should("not.ex")
      // })
  })

  it("Find by name : Duong", () => {
    cy.wait(3000);
    cy.get('thead > :nth-child(2) > :nth-child(3) > .form-control').type("Dương").then(()=> {
      cy.get(':nth-child(2) > .name-student > div > .pl-2').should("have.text", "\n              Nguyễn Văn Dương\n            ");
      cy.get('thead > :nth-child(2) > :nth-child(3) > .form-control').clear();
    })
  })

  it("Find by name : Monster", () => {
    cy.wait(3000);
    cy.get('thead > :nth-child(2) > :nth-child(3) > .form-control').type("Monster").then(()=> {
      cy.get('.table > tbody').should("have.text", "\n    \n      \n    \n  ");
      cy.get('thead > :nth-child(2) > :nth-child(3) > .form-control').clear();
    })
  })

  it("Find by email : vanduong", () => {
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(4) > .form-control').type("vanduong").then(() => {
      cy.get('tbody > tr > :nth-child(4)').should("have.text", "vanduong18598@gmail.com");
      cy.get(':nth-child(2) > :nth-child(4) > .form-control').clear();
    })
  })
})