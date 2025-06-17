/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve atualizar um pet corretamente, logado como guardian', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/mypets/edit/22');
  cy.get('#email').clear();
  cy.get('#email').type('gpa@teste.com');
  cy.get('#senha').clear();
  cy.get('#senha').type('123456');
  cy.contains("button", "Entrar").click();
  cy.get('[href="/mypets/edit/22"] > .text-verde-primario').click();
  cy.get('input[name="nome"]').clear('Lol');
  cy.get('input[name="nome"]').type('Lola');
  cy.contains("Salvar alterações").click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
