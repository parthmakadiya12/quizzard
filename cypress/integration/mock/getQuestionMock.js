export const getQuestion = (response, queNumber) => {
  let endpoint = "https://polls.apiblueprint.org/questions";
  cy.route({
    method: "GET",
    url: `${endpoint}/${queNumber}`,
    response,
  }).as("getQuestion");
};
