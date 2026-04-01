import './commands'

// Evita que erros não tratados do front quebrem o runner.
// Ajuste depois se quiser tratar casos específicos.
Cypress.on('uncaught:exception', () => {
  return false
})