describe("User is shown current article", () => {
  beforeEach(() => {
    cy.server();
  });

  it("successfully", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:articles_show.json"
    });
    cy.visit("/");
    cy.get(".main-article-div").should("contain", "Some text");
  });

  it("unsuccessfully, specific article not found", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:specific_article_not_found.json",
      status: 401
    });
    cy.visit("/");
    cy.get("#message").should("contain", "ID does not exist");
  });
});
