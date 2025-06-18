/* eslint-disable no-undef */
// cypress/e2e/adoptions/4-delete.cy.js
describe("Deleção de formulário de adoção", () => {
  before(() => {
    cy.visit("/login");
    cy.get("#email").type("apata@teste.com");
    cy.get("#senha").type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("Meus peludinhos:").should("be.visible");
  });

  it("Deve deletar formulário de adoção corretamente", () => {
    // Intercepta a chamada de delete para garantir que foi disparada
    cy.intercept("DELETE", "/adoptions/3").as("deleteAdopt");

    // Vai direto pra lista de formulários
    cy.visit("/mypets/adoptions/3", { failOnStatusCode: false });
    cy.contains("Formulários de adoção").should("be.visible");

    // Seleciona o primeiro botão de delete (ícone close)
    cy.get("div.flex.justify-between")
      .find("button.cursor-pointer")
      .first()
      .click();

    // Confirma o dialog
    cy.on("window:confirm", () => true);

    // Aguarda o DELETE
    cy.wait("@deleteAdopt");

    // Verifica que a lista foi atualizada (nenhum formulário ou mensagem vazia)
    cy.contains("Nenhuma solicitação recebida ou favoritada!").should("exist");
  });
});
