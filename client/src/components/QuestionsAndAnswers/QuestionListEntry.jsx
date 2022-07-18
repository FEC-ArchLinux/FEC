/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import HelpfulQuestionButton from "./HelpfulQuestionButton.jsx";
import AddAnswer from "./AddAnswer.jsx";

const textPad = {
  padding: '0 10px 0',
};

function QuestionListEntry({ question }) {
  const answerList = question.answers;
  const questionHelpfulness = question.question_helpfulness;
  const questionBody = question.question_body;

  return (
    <ul>
      <span>
        <span style={textPad}>
          <Question
            questionBody={questionBody}
          />
        </span>
        <span>
          <HelpfulQuestionButton
            questionHelpfulness={questionHelpfulness}
          />
          <AddAnswer />
        </span>
        <AnswerList
          answerList={answerList}
          style={textPad}
        />
      </span>
    </ul>
  );
}

export default QuestionListEntry;
