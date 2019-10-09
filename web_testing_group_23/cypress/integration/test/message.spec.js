const classes = [
    "Kiểm thử 2019-2020",
    "Lớp 22"
]
describe('Test chức năng nhắn tin với giáo viên', function () {
    // npm run cypress:open
    beforeEach(() => {
        cy.login();
        cy.contains('Lớp học của tôi').click();
        cy.url().should('include', 'https://hoclieu.sachmem.vn/live_class/classes');
        let cls = classes[0];
        cy.contains(cls).click({force:true});
        let cls_name = cy.get('ol.breadcrumb.box-shadow-hide-right').should('contain',cls);
        cy.contains("Nhắn tin, trao đổi").click().as('message');
        cy.wait(1000);
    })
    context('Window', function () {
        it('Nhắn tin thành công', function () {
            //cy.contains("laiducminh1002@gmail.com").click();
            let message = "test cypress";
            cy.get('.send-message').type(message);
            cy.get('button').contains('Gửi').click();
            cy.wait(1000);
            let my_message = cy.get('.message-box').get('.me').last().children().first();
            my_message.should('contain',message);

        })
        it('Để trống tin nhắn', function (){
            cy.get('button').contains('Gửi').should('be.disabled');
        })
    })
});
