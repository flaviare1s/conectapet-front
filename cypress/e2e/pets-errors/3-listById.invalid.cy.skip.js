/* eslint-disable no-undef */
it("Deve direcionar para página de Not Found se o id do pet for inválido", function () {
  cy.visit("http://localhost:5173/pets/xxxxx");

  cy.contains("A página que você procurou não foi encontrada.").should(
    "be.visible"
  );

  cy.wait(2000);
});
