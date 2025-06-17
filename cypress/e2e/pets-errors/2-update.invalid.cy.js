/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it("Não deve permitir atualizar pet sem campo obrigatório preenchido", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:5173/mypets/edit/1");
  cy.get("#email").clear();
  cy.get("#email").type("apata@teste.com");
  cy.get("#senha").clear();
  cy.get("#senha").type("123456");
  cy.contains("button", "Entrar").click();
  cy.contains("Meus peludinhos:").should("be.visible");
  cy.get('[href="/mypets/edit/1"] > .text-verde-primario').click();

  cy.get('input[name="nome"]', { timeout: 5000 }).should("be.visible");

  cy.get('input[name="nome"]').clear();
  cy.contains("Salvar alterações").click();

  // Mostrar mensagem de erro
  cy.get('input[name="nome"]')
    .parent()
    .contains("Campo obrigatório")
    .should("be.visible");

  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
