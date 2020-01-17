describe("User is shown current article", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("successfully", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:articles_show.json"
    });
    cy.get("#main-article-div").should("contain", "Body 1");
  });

  it("unsuccessfully, specific article not found", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:specific_article_not_found.json",
      status: 404
    });
    cy.get("#message").should("contain", "Article not found");
  });
});
