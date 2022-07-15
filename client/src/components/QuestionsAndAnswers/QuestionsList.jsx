import React from "react";
import QuestionListEntry from "./QuestionListEntry.jsx";

function QuestionsList({ questionsData }) {
  const limit = limit || 4;
  return (
    <>
      {questionsData.map((question, index) => {
        if (index <= limit) {
          return <QuestionListEntry key={question.questions_id} question={question} />;
        }
        return <></>;
      })}
    </>
  );
}

export default QuestionsList;
