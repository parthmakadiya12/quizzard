describe("quizzard", () => {
  it("should change theme properly", function () {
    cy.visit("http://localhost:3000");
    cy.get("#toggle-theme").click();
    cy.get("body").should("have.css", "background-color", "rgb(255, 218, 98)");
  });

  it("should move to questions details page by clicking on vote button", async () => {
    cy.visit("http://localhost:3000");
    cy.get("#questions-list > div > button").click();
    cy.find("#question-details")
      .should("be.visible")
      .and("have.text", "QuestionDetailsPage");
  });

  it("should renders question details page correctly", function () {
    cy.visit("http://localhost:3000/questions/12");
    cy.get(".App > div")
      .should("be.visible")
      .and("have.text", "QuestionDetailsPage");
  });
});
