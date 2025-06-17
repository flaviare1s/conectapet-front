/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve listar todos os formulários de adoção de um pet', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/login');
  cy.get('#email').type('apata@teste.com');
  cy.get('#senha').type('123456');
  cy.contains("button", "Entrar").click();
  cy.get(':nth-child(1) > .mt-3 > .flex-col > .justify-end > [title="Ver formulários"] > .text-cinza').click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
