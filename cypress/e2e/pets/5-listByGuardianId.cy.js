/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve listar todos os pets de um guardian específico', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/mypets');
  cy.get('#email').clear('apata@teste.com');
  cy.get('#email').type('apata@teste.com');
  cy.get('#senha').clear();
  cy.get('#senha').type('123456');
  cy.contains("button", "Entrar").click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
