/* eslint-disable no-undef */
it("Deve limitar a quantidade de cards visíveis de acordo com a largura da tela", () => {
  // Teste no desktop
  cy.viewport(1280, 720);
  cy.visit("http://localhost:5173/pets");
  cy.get(".pet-card").should("have.length.lte", 12); // limite para desktop

  // Teste no mobile
  cy.viewport(375, 667); // iPhone 6/7/8
  cy.reload(); // garante que o hook seja recalculado
  cy.get(".pet-card").should("have.length.lte", 5); // limite para mobile

  cy.wait(2000);
});
