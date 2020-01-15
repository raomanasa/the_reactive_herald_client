describe("User is shown current article"), () => {
  before(function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: 'fixture:articles_show.json'
    })
  it("shows the main article on page"), () => {
    cy.visit("/");
    cy.get("main-article-div").should("contain", "First article");
    };
  });
}

