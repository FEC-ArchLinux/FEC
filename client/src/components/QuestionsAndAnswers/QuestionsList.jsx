import React, { useEffect } from "react";
import QuestionListEntry from "./QuestionListEntry.jsx";

function QuestionsList({ questionsData, moreAnsweredQuestions }) {
  // console.log('qD', questionsData);
  let limit = limit || 1;
  // console.log('list', moreAnsweredQuestions);

  const listOverflow = {
    maxHeight: "50vh",
    maxWdith: "860px",
    "overflow-x": "hidden",
    "overflow-y": "scroll",
  };

  return (
    <div
      id="QuestionList"
      style={listOverflow}
    >
      {questionsData
        .sort((b, a) => a.question_helpfulness - b.question_helpfulness)
        .map((question, index) => {
          console.log('more Qs', moreAnsweredQuestions);
          if (index <= limit) {
            return <QuestionListEntry key={question.questions_id} question={question} />;
          }
          return null;
        })}
    </div>
  );
}

export default QuestionsList;
