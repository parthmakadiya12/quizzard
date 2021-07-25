import { FC } from "react";
import { useHistory } from "react-router-dom";
import { QuestionCard } from "./components";

const QuestionsPage: FC = () => {
  const history = useHistory();

  const data = [
    {
      question: "my question 11 ?",
      choices: [
        {
          choice: "C++",
          votes: 0,
          url: "/questions/19/choices/108",
        },
        {
          choice: "Python",
          votes: 0,
          url: "/questions/19/choices/109",
        },
        {
          choice: "Ruby",
          votes: 0,
          url: "/questions/19/choices/110",
        },
        {
          choice: "Verilog",
          votes: 0,
          url: "/questions/19/choices/111",
        },
      ],
      published_at: "2021-07-23T12:03:38.485Z",
      url: "/questions/19",
    },
  ];
  return (
    <div id="questions-list">
      QuestionsPage
      {data.map((item) => {
        return (
          <QuestionCard
            key={item.url}
            question={item.question}
            publishedDate={item.published_at}
            noOfChoices={item.choices.length}
            clickHandler={() => history.push(item.url)}
          />
        );
      })}
    </div>
  );
};

export default QuestionsPage;
