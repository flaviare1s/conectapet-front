/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve deletar um pet adequadamente', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/mypets');
  cy.get('#email').clear('gpa@teste.com');
  cy.get('#email').type('gpa@teste.com');
  cy.get('#senha').clear();
  cy.get('#senha').type('123456');
  cy.get('.my-4 > .text-white').click();
  cy.get(':nth-child(1) > .mt-3 > .flex-col > .justify-end > .cursor-pointer > .text-rosa-forte').first().click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
