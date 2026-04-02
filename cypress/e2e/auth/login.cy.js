describe('🔐 Autenticação - Login FightOps', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  // =========================
  // ✅ CONTEXTO: LOGIN COM SUCESSO
  // =========================
  context('Quando o usuário possui credenciais válidas', () => {

    const perfis = ['ct', 'professor', 'aluno']

    perfis.forEach((perfil) => {
      it(`Deve realizar login com sucesso e exibir a role correta (${perfil})`, () => {
        const user = users[perfil]

        cy.login(user.email, user.password)

        // valida redirecionamento
        cy.url({ timeout: 10000 }).should('not.include', '/login')

        // valida dashboard
        cy.contains('Dashboard').should('be.visible')

        // 🔥 valida ROLE (RBAC)
        cy.contains(user.role).should('be.visible')
      })
    })
  })

  // =========================
  // ❌ CONTEXTO: LOGIN INVÁLIDO
  // =========================
  context('Quando o usuário informa credenciais inválidas', () => {
    it('Não deve permitir login e deve permanecer na tela inicial', () => {
      cy.login(users.invalidUser.email, users.invalidUser.password)

      cy.url().should('include', '/')

      cy.contains('Dashboard').should('not.exist')
    })
  })

  // =========================
  // ⚠️ CONTEXTO: VALIDAÇÃO DE CAMPOS
  // =========================
  context('Quando o usuário não preenche os campos obrigatórios', () => {

    it('Deve validar campo e-mail obrigatório', () => {
      cy.get('input[type="password"]')
        .type(users.ct.password, { log: false })

      cy.get('button').click()

      cy.get('input[type="email"]').should('be.visible')
    })

    it('Deve validar campo senha obrigatório', () => {
      cy.get('input[type="email"]')
        .type(users.ct.email)

      cy.get('button').click()

      cy.get('input[type="password"]').should('be.visible')
    })

  })
})