import {account, startUrl, studentUrl} from './credential';
const { email, password} = account;
describe("Invite students to class", function () {
    it("login & go to invite modal", () => {
        cy.visit(startUrl);
        cy.get("#link-login").click();
        cy.get('input[name="user[email]"]').type(email);
        cy.get('input[name="user[password]"]').type(password);
        cy.get('input[type="submit"]').click();
        cy.visit(studentUrl);
        cy.contains("Chức năng").click();
        cy.get('a[data-target="#inviteModal"]').click();
    });

    it("have 2 textarea in invite modal", () => {
        cy.get("textarea").should("have.length", 2);
        cy.get("textarea[formcontrolname='emails']").should("have.length", 1);
        cy.get("textarea[formcontrolname='contents']").should("have.length", 1);
        cy.get("textarea[formcontrolname='emails']").type("ductt");
        cy.get("textarea[formcontrolname='contents']").type("ductt");
    });

    it("empty email", () => {
        cy.get("textarea[formcontrolname='emails']").clear();
        cy.get("textarea[formcontrolname='contents']").clear();
        cy.get('input[type="submit"]')
            .first()
            .click();
        cy.get(".error-text").should(
            "have.contain",
            "Trường này không được để trống"
        );
        cy.contains('Đóng').click();
    });

    it("invalid email", () => {
        cy.contains("Chức năng").click();
        cy.get('a[data-target="#inviteModal"]').click();
        cy.get("textarea[formcontrolname='emails']").clear();
        cy.get("textarea[formcontrolname='contents']").clear();
        cy.get('textarea[formcontrolname="emails"]').type("ductt");
        cy.get('textarea[formcontrolname="contents"]').type("Zô");
        cy.get('input[type="submit"]')
            .first()
            .click();
        cy.get("p").should("have.contain", "Email không tồn tại");
        cy.contains('Đóng').click();
    });

    it("valid email one line", () => {
        cy.contains("Chức năng").click();
        cy.get('a[data-target="#inviteModal"]').click();
        cy.get("textarea[formcontrolname='emails']").clear();
        cy.get("textarea[formcontrolname='contents']").clear();
        cy.get('textarea[formcontrolname="emails"]').type("nambui2201@gmail.com");
        cy.get('textarea[formcontrolname="contents"]').type("Zô");
        cy.get('input[type="submit"]')
            .first()
            .click();
        cy.get("#toast-container").should(
            "have.contain",
            "Gửi thông báo thành công"
        );
    });

    it("valid email multi line", () => {
        cy.contains("Chức năng").click();
        cy.get('a[data-target="#inviteModal"]').click();
        cy.get("textarea[formcontrolname='emails']").clear();
        cy.get("textarea[formcontrolname='contents']").clear();
        cy.get('textarea[formcontrolname="emails"]').type(
            "nambui2201@gmail.com\nhungtranvan6996@gmail.com\ngiangnt110299@gmail.com"
        );
        cy.get('textarea[formcontrolname="contents"]').type("Zô");
        cy.get('input[type="submit"]')
            .first()
            .click();
        cy.get("#toast-container").should(
            "have.contain",
            "Gửi thông báo thành công"
        );
    });
});