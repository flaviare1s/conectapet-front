/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Não deve permitir criar pet sem campo obrigatório preenchido', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:5173/pets/add");

  // Login
  cy.get("#email").type("gpa@teste.com");
  cy.get("#senha").type("123456");
  cy.contains("button", "Entrar").click();

  // Ir para a página de adicionar pet
  cy.get("a").contains("Novo pet").click();

  // Preencher dados do pet
  cy.get("#tipo").select("cachorro");
  cy.get("#nome").clear("Lolinha");
  cy.get("#nome").type("Lolinha");
  cy.get("#idade").clear("2 anos");
  cy.get("#idade").type("2 anos");
  cy.get("#descricao").clear("É uma cadelinha muito amigável!");
  cy.get("#descricao").type("É uma cadelinha muito amigável!");
  cy.get("#observacoes").clear("Se dá bem com outros animais.");
  cy.get("#observacoes").type("Se dá bem com outros animais.");
  cy.get("#status").select("Coração livre!");
  cy.get("#porte").select("pequeno");
  cy.get("#sexo").select("macho");
  cy.get("#vacinado").select("sim");
  cy.get("#castrado").select("sim");

  // Enviar formulário
  cy.contains("button", "Cadastrar Pet").click();

  // Mostrar mensagem de erro
  cy.contains("Campo obrigatório").should("be.visible");

  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
