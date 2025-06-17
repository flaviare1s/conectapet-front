/* eslint-disable no-undef */
it("Deve alternar favoritos e filtrar apenas os verdadeiros", () => {
  cy.visit("http://localhost:5173/login");

  cy.get("#email").type("apata@teste.com");
  cy.get("#senha").type("123456");
  cy.contains("button", "Entrar").click();

  cy.get('[title="Ver formulários"]').first().click();

  // Marcar todos como favoritos
  cy.get('[data-testid^="favorite-button"]').then(($buttons) => {
    expect($buttons.length).to.be.greaterThan(1); // Garante que há mais de um

    cy.wrap($buttons).each(($btn) => {
      cy.wrap($btn).click();
    });
  });

  // Marcar o checkbox para mostrar apenas favoritos
  cy.get('input[type="checkbox"].accent-roxo-primario').check({ force: true });

  // Verifica que todos os formulários visíveis estão favoritados
  cy.get('[data-testid^="favorite-button"]').each(($btn) => {
    cy.wrap($btn).find("svg").should("have.class", "text-roxo-primario");
  });

  // Desmarca o checkbox
  cy.get('input[type="checkbox"].accent-roxo-primario').uncheck({
    force: true,
  });

  // Desmarca todos os favoritos
  cy.get('[data-testid^="favorite-button"]').each(($btn) => {
    cy.wrap($btn).click();
  });

  // Marca checkbox novamente e verifica que lista fica vazia
  cy.get('input[type="checkbox"].accent-roxo-primario').check({ force: true });
  cy.contains("Nenhuma solicitação recebida ou favoritada!").should("exist");
  cy.wait(2000);
});
