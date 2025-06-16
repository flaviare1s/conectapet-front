/* eslint-disable no-undef */
it("Deve exibir mensagem quando o guardian não tem pets", () => {
  cy.visit("http://localhost:5173/mypets");
  cy.get("#email").clear("gpa@teste.com");
  cy.get("#email").type("gpa@teste.com");
  cy.get("#senha").clear();
  cy.get("#senha").type("123456");
  cy.get(".my-4 > .text-white").click();

  cy.contains("Nenhum pet cadastrado").should("be.visible");
  cy.wait(2000);
});
