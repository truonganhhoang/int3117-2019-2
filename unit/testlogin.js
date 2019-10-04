describe('Log in', function () {
  beforeEach(function () {
	  cy.viewport(1440,1200)
			cy.visit('https://accounts.sachmem.vn/users/sign_in')

    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')
  })

  it('successfully loads', function() {
    cy.get('#user_email').type('doanhien203302@gmail.com')
			cy.get('#user_password').type('doanduyhien99')
			cy.get('input.btn.btn-block').click()

  })
  it('successfully loads', function() {
    cy.get('#user_email').type('giaovien1@sachmem.vn')
			cy.get('#user_password').type('giaovien1@123')
			cy.get('input.btn.btn-block').click()

  })
  it('successfully loads', function() {
    cy.get('#user_email').type('	')
			cy.get('#user_password').type('	')
			cy.get('input.btn.btn-block').click()
  })
   it('successfully loads', function() {


			cy.get('a.btn.btn-block.btn-social.btn-google').click()
  })
  it('successfully loads', function() {

			cy.get('a.btn.btn-block.btn-social.btn-facebook').click()
  })
})