/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import HelpfulButton from "./HelpfulButton.jsx";
import ReportAnswerButton from "./ReportAnswerButton.jsx";

const inline = {
  display: "inline-flex",
  padding: '0 10px 10px',
  fontSize: '.7em',
};

function AnswerInfo({ answerData }) {
  const userName = answerData.answerer_name;
  const date = new Date(answerData.date).toDateString();
  const answerId = answerData.id;
  const { helpfulness } = answerData;
  return (
    <span style={inline}>
      <span>
        {`by ${userName}, ${date} `}
        <HelpfulButton
          answerId={answerId}
          helpfulness={helpfulness}
        />
        <ReportAnswerButton />
      </span>
    </span>
  );
}

export default AnswerInfo;
