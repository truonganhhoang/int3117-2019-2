describe("Test delete student", function () {
    beforeEach(function login () {
        cy.visit("https://hoclieu.sachmem.vn");
        cy.get("#link-login").click();
        cy.get('input[name="user[email]"]').type("giaovien1@sachmem.vn");
        cy.get('input[name="user[password]"]').type("giaovien1@123");
        cy.get('input[type="submit"]').click();
    });
    afterEach(function () {
	cy.get('[class="ng-input"]').eq(1).click()
	cy.wait(500)
	cy.contains('Đã xóa').parent().click()
	cy.wait(500)
	cy.get("body").then($body => {
        if ($body.find('[data-target="#activeStudent"]').length > 0) { 
		cy.get('[data-target="#activeStudent"]').each(($el, index, $list) => {
			cy.wrap($el).click()
			cy.wait(500)
			cy.get('[class="btn btn-primary bootbox-accept"]').click()
			})
	        }
	});

  })
    it("delete first student in the student list", () => {
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5cfdf60a81522b4e06d1f9fc/students");
	cy.wait(500)
	cy.get('[data-target="#deleteStudent"]').eq(1).click()
	cy.contains("Xác nhận").click()
	cy.wait(500)
	cy.get('[class="bootbox-close-button close"]').click()
	
    });
    it("delete last student in the student list", () => {
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5cfdf60a81522b4e06d1f9fc/students");
	cy.wait(500)
	cy.get('[data-target="#deleteStudent"]').last().click()
	cy.contains("Xác nhận").click()
	cy.wait(500)
	cy.get('[class="bootbox-close-button close"]').click()

    });
    it("delete student without confirm", () => {
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5cfdf60a81522b4e06d1f9fc/students");
	cy.get('[data-target="#deleteStudent"]').last().click()
	cy.wait(500)
	cy.get('[class="bootbox-close-button close"]').click()
    });

    it("delete all student", () => {
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5cfdf60a81522b4e06d1f9fc/students");
	cy.wait(500)
	cy.get('[data-target="#deleteStudent"]')
	.each(($el, index, $list) => {
		cy.wrap($el).click()
		cy.wait(500)
		cy.get('[class="btn btn-primary bootbox-accept"]').click()
		cy.wait(500)
	})
    });
}); 