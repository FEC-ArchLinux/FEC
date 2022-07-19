/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import QuestionListEntry from "./QuestionListEntry.jsx";

function QuestionsList({ questionsData = {}, moreAnsweredQuestions }) {
  const limit = limit || 4;

  const listOverflow = {
    maxHeight: "40vh",
    maxWdith: "1050px",
    width:"1050px",
    // width: "80vw",
    overflowX: "hidden",
    overflowY: "auto",
    overscrollBehaviorX: "contain",
  };

  return (
    <div
      id="QuestionList"
      style={listOverflow}
    >
      {questionsData && questionsData
        .sort((b, a) => a.question_helpfulness - b.question_helpfulness)
        .map((question, index) => {
          if (index <= limit) {
            return (
              <QuestionListEntry
                key={question.question_id}
                question={question}
              />
            );
          }
          return null;
        })}
    </div>
  );
}

export default QuestionsList;
