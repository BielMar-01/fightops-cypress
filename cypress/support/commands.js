Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')

  cy.get('input[type="email"]', { timeout: 10000 })
    .type(email)

  cy.get('input[type="password"]')
    .type(password, { log: false })

  cy.get('button').click()
})