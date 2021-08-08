export const createQuestion = (response) => {
  let endpoint = "https://polls.apiblueprint.org/questions";
  cy.route({
    method: "POST",
    url: endpoint,
    response,
  }).as("createQuestion");
};
