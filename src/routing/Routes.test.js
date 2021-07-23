import React from "react";
import Routes from "./Routing";
import { MemoryRouter } from "react-router";
import QuestionsPage from "../pages/questionsPage/QuestionsPage";
import QuestionDetailsPage from "../pages/questionDetailsPage/QuestionDetailsPage";

describe("<Routes/>", () => {
  it.only("should show Questions component for / router", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });

  it("should show Questions details page component for /question/123 router", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/question/12"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(QuestionDetailsPage)).toHaveLength(1);
  });

  it("should redirect all other routes to /questions page", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/otherRoutes"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });
});
