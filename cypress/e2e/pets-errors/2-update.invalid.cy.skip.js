/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it("Não deve permitir atualizar pet sem campo obrigatório preenchido", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:5173/mypets/edit/1");
  cy.get("#email").clear();
  cy.get("#email").type("apata@teste.com");
  cy.get("#senha").clear();
  cy.get("#senha").type("123456");
  cy.get(".my-4 > .text-white").click();
  cy.get('[href="/mypets/edit/1"] > .text-verde-primario').click();

  cy.get("#nome").clear();
  cy.get(".my-4 > .text-white").click();

  // Mostrar mensagem de erro
  cy.contains("Campo obrigatório").should("be.visible");

  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
