describe("quizzard", () => {
  it("should renders quations list page correctly", function () {
    cy.visit("http://localhost:3000");
    cy.get(".App > div").should("be.visible").and("have.text", "QuestionsPage");
  });

  it("should renders quation page correctly", function () {
    cy.visit("http://localhost:3000/question/12");
    cy.get(".App > div").should("be.visible").and("have.text", "QuestionDetailsPage");
  });
});
