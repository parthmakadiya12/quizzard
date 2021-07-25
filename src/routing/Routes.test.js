import React from "react";
import Routes from "./Routing";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import QuestionsPage from "../pages/questionsPage/QuestionsPage";
import QuestionDetailsPage from "../pages/questionDetailsPage/QuestionDetailsPage";

describe("<Routes/>", () => {
  it("should show Questions component for / router", () => {
    const component = mount(
      <ThemeProvider theme={darkTheme}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });

  it("should show Questions details page component for /question/123 router", () => {
    const component = mount(
      <ThemeProvider theme={darkTheme}>
        <MemoryRouter initialEntries={["/questions/12"]}>
          <Routes />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(component.find(QuestionDetailsPage)).toHaveLength(1);
  });

  it("should redirect all other routes to /questions page", () => {
    const component = mount(
      <ThemeProvider theme={darkTheme}>
        <MemoryRouter initialEntries={["/otherRoutes"]}>
          <Routes />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });
});
