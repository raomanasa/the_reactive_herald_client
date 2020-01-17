describe("Visitor can see side articles", () => {
  beforeEach(() => {
    cy.server();
  });

  it("successfully", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:side_articles_shown.json"
    });
    cy.visit("/");
    cy.get("#main-article-div").should("contain", "Body 1");
    cy.get("#side-articles-div-2").should("contain", "TestBody2");
  });
});
