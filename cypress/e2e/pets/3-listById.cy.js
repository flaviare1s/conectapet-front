/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve listar o perfil de um pet a partir do seu id', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/mypets');
  cy.get('#email').clear();
  cy.get('#email').type('gpa@teste.com');
  cy.get('#senha').clear();
  cy.get('#senha').type('123456');
  cy.contains("button", "Entrar").click();
  cy.get('.text-yellow-600').first().click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
