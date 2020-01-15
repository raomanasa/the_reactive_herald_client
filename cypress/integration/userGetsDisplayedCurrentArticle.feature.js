describe("User is shown current article", () => {
    beforeEach(() => {
      cy.server();
      cy.visit("/");
    });

    it("successfully", () => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_show.json"
      });

      cy.get("main-article-div").should("contain", "Some text");
    });
  })
