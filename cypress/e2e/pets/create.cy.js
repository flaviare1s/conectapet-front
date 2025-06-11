/* eslint-disable no-undef */
describe("Fluxo de login de guardian e cadastro de pet", () => {
  it("Deve fazer login de guardian e criar um pet corretamente", () => {
    cy.visit("http://localhost:5173/pets/add");

    // Login
    cy.get("#email").type("apata@teste.com");
    cy.get("#senha").type("123456");
    cy.contains("button", "Entrar").click();

    // Ir para a página de adicionar pet
    cy.get("a").contains("Novo pet").click();

    // Preencher dados do pet
    cy.get("#tipo").select("cachorro");
    cy.get("#nome").type("Lolinha");
    cy.get("#idade").type("1 ano");
    cy.get("#imagem").attachFile("lolinha.jpg");
    cy.get("#descricao").type("É uma cadelinha muito amigável!");
    cy.get("#observacoes").type("Se dá bem com outros animais.");
    cy.get("#status").select("Coração livre!");
    cy.get("#porte").select("pequeno");
    cy.get("#sexo").select("fêmea");
    cy.get("#vacinado").select("sim");
    cy.get("#castrado").select("sim");

    // Enviar formulário
    cy.contains("button", "Cadastrar Pet").click();

    // Verificar se o pet foi cadastrado
    cy.url().should("include", "/mypets");

    cy.contains("Lolinha", { timeout: 10000 }).should("be.visible");

    cy.contains("Pet cadastrado com sucesso", { timeout: 5000 }).should(
      "exist"
    );

    cy.scrollTo("bottom");

    cy.wait(2000);
  });
});
