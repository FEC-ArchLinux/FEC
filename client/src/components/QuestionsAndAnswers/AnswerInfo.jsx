import React from "react";
import HelpfulButton from "./HelpfulButton.jsx";
import ReportAnswerButton from "./ReportAnswerButton.jsx";

const inline = {
  display: "inline-flex",
  padding: '0 40px 0',
  fontSize: 'small',
};

function AnswerInfo({answerData}) {
  const userName = answerData.answerer_name;
  const date = new Date(answerData.date).toDateString();
  const {helpfulness} = answerData;
  return (
    <span style={inline}>
      <span>
        {`by ${userName}, ${date} |`}
        <HelpfulButton
          helpfulness={helpfulness}
        />
        <ReportAnswerButton />
      </span>
    </span>
  );
}

export default AnswerInfo;
