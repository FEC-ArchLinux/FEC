/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import QuestionListEntry from "./QuestionListEntry.jsx";

function QuestionsList({ questionsData = {}, moreAnsweredQuestions, questionSearchInput }) {
  const limit = 1;
  const listOverflow = {
    maxHeight: "40vh",
    maxWdith: "1050px",
    width: "1050px",
    // width: "80vw",
    overflowX: "hidden",
    overflowY: "auto",
    overscrollBehaviorX: "contain",
  };
  if (questionSearchInput.length > 3) {
    const filteredQuestionsData = questionsData.filter((question) => (
      question.question_body.includes(questionSearchInput)
    ));
    return (
      <div
        id="QuestionList"
        style={listOverflow}
      >
        {filteredQuestionsData
          .sort((b, a) => a.question_helpfulness - b.question_helpfulness)
          .map((question, index) => (
            <QuestionListEntry
              key={question.question_id}
              question={question}
            />
          ))}
      </div>
    );
  }
  if (moreAnsweredQuestions) {
    return (
      <div
        id="QuestionList"
        style={listOverflow}
      >
        {questionsData && questionsData
          .sort((b, a) => a.question_helpfulness - b.question_helpfulness)
          .map((question, index) => (
            <QuestionListEntry
              key={question.question_id}
              question={question}
            />
          ))}
      </div>
    );
  }
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
