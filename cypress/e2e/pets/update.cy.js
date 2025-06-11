/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve atualizar um pet corretamente, logado como guardian', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/mypets/edit/52');
  cy.get('#email').clear();
  cy.get('#email').type('apata@teste.com');
  cy.get('#senha').clear();
  cy.get('#senha').type('123456');
  cy.get('.my-4 > .text-white').click();
  cy.get('[href="/mypets/edit/52"] > .text-verde-primario').click();
  cy.get('#nome').clear('Lolinha');
  cy.get('#nome').type('Lola');
  cy.get('.my-4 > .text-white').click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
