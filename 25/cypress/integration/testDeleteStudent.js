describe("Test delete student", function () {
    beforeEach(function login () {
        cy.visit("https://hoclieu.sachmem.vn");
        cy.get("#link-login").click();
        cy.get('input[name="user[email]"]').type("giaovien1@sachmem.vn");
        cy.get('input[name="user[password]"]').type("giaovien1@123");
        cy.get('input[type="submit"]').click();
    });
    afterEach(function () {
		cy.wait(1000)
		cy.get('[class="ng-input"]').eq(1).click()
		cy.wait(500)
		cy.contains('Đã xóa').parent().click()
		cy.wait(500)
		cy.get("body").then($body => {
		if ($body.find('[data-target="#activeStudent"]').length > 0) { 
			cy.get('[data-target="#activeStudent"]').each(($el, index, $list) => {
				cy.wait(500)
				cy.wrap($el).click()
				cy.wait(500)
				cy.get('[class="btn btn-primary bootbox-accept"]').click()
			})
	    }
	});

  })
  it("delete all student", () => {
        cy.visit("https://hoclieu.sachmem.vn/live_class/class/5cfdf60a81522b4e06d1f9fc/students");
		cy.wait(500)
		var studentNum
		cy.get("body").then($body => {
			studentNum = $body.find('[data-target="#deleteStudent"]').length
			for (var i = 0 ; i <studentNum; i++){
				cy.get('[data-target="#deleteStudent"]').eq(0).click()
				cy.wait(500)
				cy.get('[class="btn btn-primary bootbox-accept"]').click()
				cy.wait(1000)
			}
		})
		cy.get("body").find('[data-target="#deleteStudent"]').should('have.length', 0)
    });
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
	
}); 