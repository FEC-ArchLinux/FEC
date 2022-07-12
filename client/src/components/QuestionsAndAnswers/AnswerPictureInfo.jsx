import React from "react";
import HelpfulButton from "./HelpfulButton.jsx";
import ReportAnswerButton from "./ReportAnswerButton.jsx";

const inline = {
  display: "inline-flex",
  height: '30px',
};

function AnswerPictureInfo() {
  return (
    <span style={inline}>
      <p>{`by ${'username'}`}</p>
      <p>date</p>
      <p>|</p>
      <HelpfulButton />
      <p>|</p>
      <ReportAnswerButton />
    </span>
  );
}

export default AnswerPictureInfo;
