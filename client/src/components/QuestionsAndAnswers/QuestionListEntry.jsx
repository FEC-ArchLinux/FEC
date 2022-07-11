import React from "react";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import HelpfulQuestionButton from "./HelpfulQuestionButton.jsx";
import AddAnswer from "./AddAnswer.jsx";

const inline = {
  display: "inline-flex",
};

function QuestionListEntry() {
  return (
    <ul>
      <span>
        <span style={inline}>
          <Question />
          {/* <span> */}
            <HelpfulQuestionButton />
            <p>|</p>
            <AddAnswer />
          {/* </span> */}
        </span>
        <AnswerList />
      </span>
    </ul>
  );
}

export default QuestionListEntry;
