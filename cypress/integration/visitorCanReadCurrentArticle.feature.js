describe("User is shown current article"), () => {
  it("shows the main article on page"), () => {
    cy.visit("/");
    cy.get("main-article-div").should("contain", "First article");
    };
};

