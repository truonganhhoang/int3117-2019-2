context('Actions', () => {
  beforeEach(() => {
    window.localStorage.setItem('currentUser', '{"role":"teacher","score":23,"language":"vi","_id":"5b6566daa016701eee3ece21","uid":"365136","email":"giaovien1@sachmem.vn","username":"giáoviênsáchmềm","firstname":"Viên","lastname":"Giáo","avatar":"/images/avatar/3c995dd21a30a87a05f4d5cef475b92d.jpeg","__v":0,"updatedAt":"2019-10-09T15:04:32.670Z"}')
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWI2NTY2ZGFhMDE2NzAxZWVlM2VjZTIxIiwicm9sZSI6InRlYWNoZXIiLCJ1aWQiOiIzNjUxMzYiLCJpYXQiOjE1NzA3ODE4NDUsImV4cCI6MTU3MDk1NDY0NX0.o6C8LDMVD9n_5stibwCyvV9xsEQ6q4uTUYQkj4o7N38')

    cy.visit('https://hoclieu.vn/live_class/class/5d94baba2675db39fb93cb7e/assignments')
  })

  it('Xem kết quả', () => {
    cy.get('#optionDropdown').click()
    cy.get('[data-target="#resultExamModal"]').click()
    cy.get('#resultExamModal').should('be.visible')
  })

  it('Đóng popup xem kết quả', () => {
    cy.get('#resultExamModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('#resultExamModal').should('not.be.visible')
  })
})
