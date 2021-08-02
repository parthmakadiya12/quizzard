describe("quizzard happy path test", () => {
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
    cy.visit("http://localhost:3000/questions/14");
    cy.server();
    cy.route("POST", "/questions/**/choices/**").as("post");

    cy.get("#questionWrapper > div:first > div > div > span").click();
    cy.get("#questionWrapper >button").click();

    //Ideally we should mock these
    cy.wait("@post").should((xhr) => {
      expect(xhr.status, "successful POST").to.equal(201);
    });
  });
});
