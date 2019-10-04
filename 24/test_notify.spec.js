describe("Notify ", function () {
    it("login and go to notify", () => {
        cy.visit("https://hoclieu.sachmem.vn");
        cy.get("#link-login").click();
        cy.get('input[name="user[email]"]').type("giaovien1@sachmem.vn");
        cy.get('input[name="user[password]"]').type("giaovien1@123");
        cy.get('input[type="submit"]').click();
        cy.visit(
            "https://hoclieu.sachmem.vn/live_class/class/5d960893ec4e443482b3b99b/message/students"
        );
       
        
    });

    it("input là các ký tự space", () => {
        
        cy.get("textarea[name='message_content']").type("        ");
        cy.contains("Gửi").click();
    });

    it("input để trống", () => {
        cy.get("textarea[name='message_content']").clear();
        cy.contains("Gửi").click();
    });

    it("kí tự đầu và cuối là dấu cách", () => {
        cy.get("textarea[name='message_content']").type(" hello cả lớp ");
        cy.contains("Gửi").click();
    });

    it("iput gồm các ký tự nhập từ bàn phím", () => {
        cy.get("textarea[name='message_content']").type("hdfgh");
        cy.contains("Gửi").click();
    });

    
});

