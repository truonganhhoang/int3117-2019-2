// Cypress.Commands.add("login", () => { 
//   let currentUser = JSON.stringify({
//     "role":"teacher",
//     "score":20,
//     "language":"vi",
//     "_id":"5b6566daa016701eee3ece21",
//     "uid":"365136",
//     "email":"giaovien1@sachmem.vn",
//     "username":"giáoviênsáchmềm",
//     "firstname":"Viên",
//     "lastname":"Giáo",
//     "avatar":"/images/avatar/3c995dd21a30a87a05f4d5cef475b92d.jpeg",
//     "__v":0,
//     "updatedAt":"2019-09-15T17:09:32.188Z"
//   })
//   window.localStorage.setItem('currentUser', currentUser)
//   window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjY1NjZkYWEwMTY3MDFlZWUzZWNlMjEiLCJyb2xlIjoidGVhY2hlciIsInVpZCI6IjM2NTEzNiIsImlhdCI6MTU3MDAzNzM4NiwiZXhwIjoxNTcwMTIzNzg2fQ.CvNaM4KuxXtyqNy8iwTviM_IMUKpvAgTo9UO6k4S9ik')
//   cy.visit('https://hoclieu.vn/live_class/classes')
// })

Cypress.Commands.add('login', () => {
  cy.visit('https://hoclieu.sachmem.vn')
  cy.contains('Đăng nhập').click()
  cy.get('#user_email').type('giaovien1@sachmem.vn') // type email
  cy.get('#user_password').type('giaovien1@123') // type password
  cy.get('#new_user > div:nth-child(6) > input').click()
  cy.visit('https://hoclieu.sachmem.vn/live_class/classes')  
})
