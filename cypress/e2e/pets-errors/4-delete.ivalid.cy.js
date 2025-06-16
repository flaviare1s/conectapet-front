/* eslint-disable no-undef */
it("Deve exibir erro ao tentar deletar um pet com erro 500", () => {
  cy.intercept("DELETE", "/pets/*", {
    statusCode: 500,
    body: { message: "Erro interno do servidor" },
  }).as("deletePet");

  cy.visit("http://localhost:5173/mypets");

  cy.get("#email").type("apata@teste.com");
  cy.get("#senha").type("123456");
  cy.contains("button", "Entrar").click();

  cy.get(
    ":nth-child(1) > .mt-3 > .flex-col > .justify-end > .cursor-pointer > .text-rosa-forte"
  )
    .should("be.visible")
    .click();

  cy.on("window:confirm", () => true);

  cy.wait("@deletePet");

  cy.contains("Erro ao remover pet").should("be.visible");
  cy.wait(2000);
});
