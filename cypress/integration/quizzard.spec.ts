describe("quizzard", () => {
  
  it("should change theme properly", function () {
    cy.visit("http://localhost:3000");
    cy.get("#toggle-theme").click();
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  });

  it("should renders quations list page correctly", function () {
    cy.visit("http://localhost:3000");
    cy.get(".App > div").should("be.visible").and("have.text", "QuestionsPage");
  });

  it("should renders quation page correctly", function () {
    cy.visit("http://localhost:3000/question/12");
    cy.get(".App > div").should("be.visible").and("have.text", "QuestionDetailsPage");
  });
});
