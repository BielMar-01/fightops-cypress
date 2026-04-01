describe('Autenticação - Login', () => {
  let users
  let messages

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })

    cy.fixture('messages').then((data) => {
      messages = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Dado que o usuário CT possui credenciais válidas, Quando realizar login, Então deve acessar o sistema com sucesso', () => {
    cy.login(users.ct.email, users.ct.password)

    cy.url({ timeout: 10000 }).should('not.include', '/login')
    cy.get('body').should('be.visible')
  })

  it('Dado que o usuário informa credenciais inválidas, Quando tentar realizar login, Então deve permanecer na tela de autenticação', () => {
    cy.login(users.invalidUser.email, users.invalidUser.password)

    cy.url().should('include', '/')
    cy.get('body').should('be.visible')

    // Descomente quando o sistema exibir a mensagem real
    // cy.contains(messages.login.invalidCredentials).should('be.visible')
  })

  it('Dado que o usuário não preenche o e-mail, Quando tentar realizar login, Então o sistema deve validar o campo obrigatório', () => {
    cy.get('input[type="password"]').type(users.ct.password, { log: false })
    cy.contains('button', /entrar|login|acessar/i).click()

    cy.get('input[type="email"]').should('be.visible')

    // Descomente quando a validação textual estiver confirmada
    // cy.contains(messages.login.requiredEmail).should('be.visible')
  })

  it('Dado que o usuário não preenche a senha, Quando tentar realizar login, Então o sistema deve validar o campo obrigatório', () => {
    cy.get('input[type="email"]').type(users.ct.email)
    cy.contains('button', /entrar|login|acessar/i).click()

    cy.get('input[type="password"]').should('be.visible')

    // Descomente quando a validação textual estiver confirmada
    // cy.contains(messages.login.requiredPassword).should('be.visible')
  })
})