import * as voteQuestionMock from "./mock/voteQuestionMock";
import * as getQuestionsMock from "./mock/getQuestionsMock";
import * as getQuestionMock from "./mock/getQuestionMock";
import * as createQuestionMock from "./mock/createQuestionMock";

describe("quizzard happy path test", () => {
  it("should change theme properly", function () {
    cy.server();
    cy.fixture("../fixtures/mock_data.json").then((rc) => {
      getQuestionsMock.getQuestions(rc.voteQuestion);
    });
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

  it("should be able to vote on given question.", function () {
    cy.server();
    cy.fixture("../fixtures/mock_data.json").then((rc) => {
      voteQuestionMock.voteQuestion(rc.voteQuestion, 20, 114);
      getQuestionMock.getQuestion(rc.getQuestion, 20);
    });
    cy.visit("http://localhost:3000/questions/20");
    cy.wait("@getQuestion");
    cy.get("#RamGV").click();
    cy.get("#questionWrapper > button").click();
    cy.get("#RamGV_percentage", { timeout: 10000 })
      .should("be.visible")
      .and("have.text", "50%");
  });

  it("should create question correctly", function () {
    cy.server();
    cy.fixture("../fixtures/mock_data.json").then((rc) => {
      createQuestionMock.createQuestion(rc.voteQuestion);
    });
    cy.visit("http://localhost:3000/create-question");

    cy.get("#createQuestionForm > input").eq(0).type("I am a question");
    cy.get("#createQuestionForm > div:nth-child(4) > input").type("Option A");
    cy.get("[data-icon=plus-circle]").click();
    cy.get("#createQuestionForm > div:nth-child(5) > input").type("Option B");
    cy.get("[data-icon=plus-circle]").click();
    cy.get("#createQuestionForm > div:nth-child(6) > input").type("Option C");
    cy.get("#createQuestionForm > div:nth-child(5) > input").type(" new");
    cy.get("[data-icon=trash]").eq(2).click();
    cy.get("input").should("have.length", 3);
    cy.get("input").eq(2).should("have.value", "Option B new");

    cy.url().then((url) => {
      cy.get("#createQuestionForm >button").click();
      cy.url().should("not.eq", url);
    });
  });
});
