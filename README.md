# 🥊 FightOps - Testes E2E com Cypress

Projeto de automação de testes End-to-End utilizando Cypress para validação do sistema FightOps, um SaaS para gestão de academias de luta (CTs).

---

# 📌 Sobre o sistema

O **FightOps** é uma plataforma web voltada para gestão de academias de artes marciais, permitindo o controle completo de alunos, professores e operações administrativas.

## 👥 Perfis de usuário (RBAC)

O sistema possui controle de acesso baseado em perfil:

- **CT (Administrador)**  
  Acesso total ao sistema (gestão completa)

- **Professor**  
  Gerencia alunos, presença e graduação

- **Aluno**  
  Visualiza apenas seus próprios dados

---

# ⚙️ Funcionalidades do sistema

As principais funcionalidades do FightOps incluem:

- 🔐 Autenticação (Login)
- 📊 Dashboard com indicadores
- 👥 Gestão de alunos
- 💳 Pagamentos
- 📅 Controle de presença
- 🎓 Graduação
- 📢 Avisos
- 🎂 Aniversários

---

# 🎯 Objetivo do projeto de testes

Este projeto tem como objetivo validar o comportamento da aplicação sob a perspectiva do usuário final, garantindo:

- qualidade funcional
- estabilidade
- confiabilidade das regras de negócio
- cobertura de cenários críticos

---

# 🧪 Estratégia de testes

Os testes seguem uma abordagem baseada em:

## ✔️ E2E (End-to-End)
Simulação do comportamento real do usuário.

## ✔️ BDD (Behavior Driven Development)
Cenários escritos em linguagem natural:

- Dado (Given)
- Quando (When)
- Então (Then)

Exemplo:

> Dado que o usuário possui credenciais válidas  
> Quando realiza o login  
> Então deve acessar o sistema com sucesso

---

# 🔐 Cenários cobertos atualmente

## Login

- Login com credenciais válidas (CT)
- Login com credenciais inválidas
- Validação de campos obrigatórios
- Comportamento da aplicação após autenticação

---

# 📁 Estrutura do projeto

```bash
cypress/
├── e2e/
│   └── auth/
│       └── login.cy.js
│
├── fixtures/
│   ├── users.json
│   └── messages.json
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
cypress.config.js
README.md
.gitignore