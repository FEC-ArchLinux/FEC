import React from "react";
import HelpfulAnswerButton from "./HelpfulQuestionButton.jsx";
import ReportAnswerButton from "./ReportAnswerButton.jsx";

const inline = {
  display: "inline-flex",
  height: '30px',
};

function AnswerInfo() {
  return (
    <span style={inline}>
      <p>username, </p>
      <p>date</p>
      <p>|</p>
      <HelpfulAnswerButton />
      <p>|</p>
      <ReportAnswerButton />
    </span>
  );
}

export default AnswerInfo;
