import { account } from './credential';
import { classUrl } from './credential';

describe('Message', function() {
  beforeEach(function(){
    cy.visit('https://hoclieu.sachmem.vn');
    cy.contains('Đăng nhập').click();
    cy.get('#user_email').type(account.email);
    cy.get('#user_password').type(account.password);
    cy.get('form').submit();
    cy.visit('https://hoclieu.sachmem.vn');
    cy.contains('Đăng nhập').click();
    cy.wait(2000);
    cy.visit(classUrl);
    cy.get('.fa-comment').parent().click();
    cy.wait(4000);
    cy.get('#sidebar-wrapper > div').eq(3).click();
    cy.wait(2000);
  })

  it('message to some one when message is present', function() {
    cy.get('.send-message').type('Test');
    cy.get('.fa-paper-plane').parent().click();
    cy.get('.message-box').should('contain', 'Test');
  })

  it('cannot message to someone when message is blank', function() {
    cy.get('.send-message').type('   ');
    cy.get('.fa-paper-plane').parent().click();
    cy.get('.send-message').type('   ');
    cy.get('.btn-primary').eq(0).should('be.disabled');
  })
})

