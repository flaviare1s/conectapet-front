/* eslint-disable no-undef */
it("Deve dar erro ao criar um formulário de adoção com campo obrigatório vazio", () => {
  // Intercepta o POST e simula falha
  cy.intercept("POST", "/adoptions", {
    statusCode: 500,
    body: { message: "Erro ao enviar adoção" },
  }).as("postAdoption");

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
  cy.get('input[name="bairro"]').should(
    "have.value",
    "Engenheiro Luciano Cavalcante"
  );
  cy.get('input[name="cidade"]').should("have.value", "Fortaleza");
  cy.get('input[name="numero"]').type("2");
  cy.contains("Próximo").click();
  cy.get('select[name="custos"]').should("be.visible").select("sim");
  cy.get('select[name="compromisso"]').select("não");
  cy.get('select[name="visitas"]').select("sim");
  cy.get('input[name="motivacao"]').clear();
  cy.get('input[name="termo"]').check();

  cy.contains("Finalizar").click();

  cy.contains("Campo obrigatório").should("exist");

  cy.wait(2000);
});
