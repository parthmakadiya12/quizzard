export const getQuestions = (response = []) => {
  let endpoint = "https://polls.apiblueprint.org/questions?page=1";
  cy.route({
    method: "GET",
    url: endpoint,
    response,
  }).as("getQuestions");
};
