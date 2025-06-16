/* eslint-disable no-undef */
it("Deve fazer o fluxo completo de cadastro de usuário com mocks, mas o usuário criado permanece na tabela de pendingUsers", function () {
  // Mock da verificação de email
  cy.intercept("POST", "/users/verify-email", {
    statusCode: 200,
    body: { message: "Verificado com sucesso" },
  }).as("verifyEmail");

  // Mock do login com token JWT válido fake
  cy.intercept("POST", "/login", {
    statusCode: 200,
    body: {
      user: {
        id: "8",
        nome: "José da Silva",
        email: "ze@teste.com",
        role: "user",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
        "eyJpZCI6IjEyIiwicm9sZSI6InVzZXIifQ." +
        "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
    },
  }).as("loginUser");

  // Mock da requisição GET para pegar os dados do usuário pelo id
  cy.intercept("GET", "/users/12", {
    statusCode: 200,
    body: { nome: "José da Silva" },
  }).as("getUserData");

  cy.visit("http://localhost:5173/signup/");
  cy.get('div > [href="/signup/user"]').click();

  cy.get("#nome").type("José da Silva");
  cy.get("#email").type("ze@teste.com");
  cy.get("#senha").type("123456");
  cy.contains("Criar conta").click();

  cy.get('input[placeholder="Código de verificação"]', {
    timeout: 10000,
  }).should("exist");
  cy.get('input[placeholder="Código de verificação"]').type("123456");
  cy.contains("Verificar").click();

  cy.wait("@verifyEmail");
  cy.wait("@loginUser");
  cy.wait("@getUserData");

  cy.url().should("eq", "http://localhost:5173/");

  cy.wait(2000);
});
