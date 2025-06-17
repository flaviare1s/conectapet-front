/* eslint-disable no-undef */
it("Deve fazer o fluxo completo de cadastro de usuário guardian com mocks, mas o usuário criado permanece na tabela de pendingUsers", function () {
  // Mock da verificação de email
  cy.intercept("POST", "/users/verify-email", {
    statusCode: 200,
    body: { message: "Verificado com sucesso" },
  }).as("verifyEmail");

  // Mock do login com token com role: guardian
  cy.intercept("POST", "/login", {
    statusCode: 200,
    body: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
        "eyJpZCI6IjEzIiwiZW1haWwiOiJwYXRpbmhhc0B0ZXN0ZS5jb20iLCJyb2xlIjoiZ3VhcmRpYW4ifQ." +
        "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
      refreshToken: "fake_refresh_token",
    },
  }).as("loginGuardian");

  // Mock da requisição GET para pegar os dados do guardian pelo id
  cy.intercept("GET", "/users/13", {
    statusCode: 200,
    body: { nome: "Abrigo Patinhas" },
  }).as("getGuardianData");

  cy.visit("http://localhost:5173/signup/");
  cy.get('div > [href="/signup/guardian"]').click();

  cy.get('input[name="nome"]').type("Abrigo Patinhas");
  cy.get('input[name="email"]').type("patinhas@teste.com");
  cy.get('input[name="senha"]').type("123456");
  cy.contains("Criar conta").click();

  cy.get('input[placeholder="Código de verificação"]', {
    timeout: 10000,
  }).should("exist");
  cy.get('input[placeholder="Código de verificação"]').type("123456");
  cy.contains("Verificar").click();

  cy.wait("@verifyEmail");
  cy.wait("@loginGuardian");
  cy.wait("@getGuardianData");

  cy.url().should("eq", "http://localhost:5173/mypets");

  cy.wait(2000);
});
