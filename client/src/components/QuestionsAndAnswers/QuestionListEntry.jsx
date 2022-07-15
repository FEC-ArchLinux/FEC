import React from "react";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import HelpfulQuestionButton from "./HelpfulQuestionButton.jsx";
import AddAnswer from "./AddAnswer.jsx";

const inline = {
  display: "inline-flex",
  padding: '0 10px 0',
  margin: "0px",
  height: "0em",
};

function QuestionListEntry({ question }) {
  const answerList = question.answers
  const questionHelpfulness = question.question_helpfulness;
  const questionBody = question.question_body;

  return (
    <ul>
      <span>
        <span style={inline}>
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
          style={inline}
        />
      </span>
    </ul>
  );
}

export default QuestionListEntry;
