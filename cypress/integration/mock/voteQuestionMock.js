export const voteQuestion = (response = {}, queNumber, choiceNumber) => {
  //https://polls.apiblueprint.org/questions/20/choices/114

  let endpoint = "https://polls.apiblueprint.org/questions";
  cy.route({
    method: "POST",
    url: `${endpoint}/${queNumber}/choices/${choiceNumber}`,
    response,
  }).as("voteQuestion");
};
