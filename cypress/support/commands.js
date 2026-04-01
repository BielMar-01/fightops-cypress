Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')

  cy.get('input[type="email"]', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(email)

  cy.get('input[type="password"]')
    .should('be.visible')
    .clear()
    .type(password, { log: false })

  cy.contains('button', /entrar|login|acessar/i)
    .should('be.visible')
    .click()
})