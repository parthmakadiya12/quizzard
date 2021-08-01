import { QuestionType } from "../types/QuestionType";
import {
  calculatePercentage,
  questionSelector,
  increaseVoteCount,
} from "./questionsDataHelper";

const realLocation = window.location;

describe("questionDataHelper", () => {
  let questions: QuestionType[];
  beforeEach(() => {
    questions = [
      {
        question: "Favourite programming language?",
        published_at: "2014-11-11T08:40:51.620Z",
        url: "/questions/1",
        choices: [
          {
            choice: "Swift",
            url: "/questions/1/choices/1",
            votes: 2048,
          },
          {
            choice: "Python",
            url: "/questions/1/choices/2",
            votes: 1024,
          },
          {
            choice: "Objective-C",
            url: "/questions/1/choices/3",
            votes: 512,
          },
          {
            choice: "Ruby",
            url: "/questions/1/choices/4",
            votes: 256,
          },
        ],
      },
    ];
  });
  afterEach(() => {
    window.location = realLocation;
  });

  it("calculatePercentage: should add percentage to questions", () => {
    const newData = calculatePercentage(questions);
    const expectedData = [
      {
        choices: [
          {
            choice: "Swift",
            percentage: 53.33,
            url: "/questions/1/choices/1",
            votes: 2048,
          },
          {
            choice: "Python",
            percentage: 26.67,
            url: "/questions/1/choices/2",
            votes: 1024,
          },
          {
            choice: "Objective-C",
            percentage: 13.33,
            url: "/questions/1/choices/3",
            votes: 512,
          },
          {
            choice: "Ruby",
            percentage: 6.67,
            url: "/questions/1/choices/4",
            votes: 256,
          },
        ],
        published_at: "2014-11-11T08:40:51.620Z",
        question: "Favourite programming language?",
        url: "/questions/1",
      },
    ];
    expect(newData).toEqual(expectedData);
  });

  it("calculatePercentage: should return 0 for 0 votes", () => {
    const data = [
      {
        question: "Favourite programming language?",
        published_at: "2014-11-11T08:40:51.620Z",
        url: "/questions/1",
        choices: [
          {
            choice: "Swift",
            url: "/questions/1/choices/1",
            votes: 0,
          },
          {
            choice: "Python",
            url: "/questions/1/choices/2",
            votes: 0,
          },
          {
            choice: "Objective-C",
            url: "/questions/1/choices/3",
            votes: 0,
          },
        ],
      },
    ];
    const newData = calculatePercentage(data);
    const expectedData = [
      {
        choices: [
          {
            choice: "Swift",
            percentage: 0,
            url: "/questions/1/choices/1",
            votes: 0,
          },
          {
            choice: "Python",
            percentage: 0,
            url: "/questions/1/choices/2",
            votes: 0,
          },
          {
            choice: "Objective-C",
            percentage: 0,
            url: "/questions/1/choices/3",
            votes: 0,
          },
        ],
        published_at: "2014-11-11T08:40:51.620Z",
        question: "Favourite programming language?",
        url: "/questions/1",
      },
    ];
    expect(newData).toEqual(expectedData);
  });

  it("questionSelector: should return null for empty question object", () => {
    expect(questionSelector()).toBe(null);
  });

  it("questionSelector: should return correct object for given question object", () => {
    const temp = global.window;
    global.window = Object.create(window);
    const url = "https://www.example.com/questions/1";
    Object.defineProperty(window, "location", {
      value: {
        href: url,
        pathname: "/questions/1",
      },
      writable: true,
    });
    expect(questionSelector(questions)).toEqual(questions[0]);
  });

  it("questionSelector: should return empty object if no url matches", () => {
    expect(questionSelector(questions)).toEqual({});
  });

  it("increaseVoteCount: should increase count of matched option", () => {
    expect(questions[0].choices[0].votes).toBe(2048);
    expect(questions[0].choices[0].url).toBe("/questions/1/choices/1");
    increaseVoteCount(questions, "/questions/1", "/questions/1/choices/1");
    expect(questions[0].choices[0].votes).toBe(2049);
  });

  it("increaseVoteCount: should not increase count if no option matched", () => {
    expect(questions[0].choices[0].votes).toBe(2048);
    expect(questions[0].choices[0].url).toBe("/questions/1/choices/1");
    increaseVoteCount(questions, "/questions/1", "/questions/1/choices/221");
    expect(questions[0].choices[0].votes).toBe(2048);
  });

  it("increaseVoteCount: should not increase count no matched que found", () => {
    expect(
      increaseVoteCount(questions, "/questions/12", "/questions/1/choices/221")
    ).toBe(questions);
  });
});
