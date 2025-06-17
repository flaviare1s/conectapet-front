/* eslint-disable no-undef */
/* ==== Test Created with Cypress Studio ==== */
it('Deve criar um formulário de adoção válido', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:5173/login");
  cy.get("#email").type("maria@teste.com");
  cy.get("#senha").type("123456");
  cy.contains("button", "Entrar").click();

  cy.visit("http://localhost:5173/pets/adopt/6");
  cy.get('input[name="nome"]').type("Maria de Sousa");
  cy.get('input[name="dataN"]').type("1990-05-20");
  cy.get('input[name="cpf"]').type("11111111111");
  cy.get('select[name="ec"]').select("solteiro");
  cy.get('input[name="profissao"]').type("Professora");
  cy.get('input[name="cel"]').type("11912345678");
  cy.contains("Próximo").click();
  cy.get('input[name="cep"]').type("60813620");
  cy.get('input[name="rua"]', { timeout: 10000 }).should(
    "have.value",
    "Rua Caetano Ximenes Aragão"
  );
  cy.get('input[name="bairro"]', { timeout: 10000 }).should(
    "have.value",
    "Engenheiro Luciano Cavalcante"
  );
  cy.get('input[name="cidade"]', { timeout: 10000 }).should(
    "have.value",
    "Fortaleza"
  );
  cy.get('input[name="numero"]').type("2");
  cy.contains("Próximo").click();
  cy.get('select[name="custos"]', { timeout: 10000 }).should("be.visible");
  cy.get('select[name="compromisso"]').select("não");
  cy.get('select[name="visitas"]').select("sim");
  cy.get('input[name="motivacao"]').type(
    "Quero uma companhia pro meu outro pet."
  );
  cy.get('input[name="termo"]').check();
  cy.contains("Finalizar").click();
  cy.wait(2000);
  /* ==== End Cypress Studio ==== */
});
