/* eslint-disable no-undef */
it("Deve mostrar mensagem de nenhum resultado quando a API retornar lista vazia", () => {
  cy.intercept("GET", "/pets", {
    statusCode: 200,
    body: [],
  }).as("getPetsEmpty");


  cy.visit("http://localhost:5173/");

  cy.wait("@getPetsEmpty");

  cy.contains("Nenhum resultado encontrado!", { timeout: 10000 }).should(
    "be.visible"
  );
  
  cy.wait(2000);
});
