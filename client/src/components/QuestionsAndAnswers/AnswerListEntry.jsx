import React from "react";
import AnswerInfo from "./AnswerInfo.jsx";
import AnswerPictureListComponent from "./AnswerPictureListComponent.jsx";

const inline = {
  display: "inline-flex",
  padding: '0 10px 0',
};

function AnswerListEntry({ answerData }) {
  const answerBody = answerData.body;
  return (
    <ul>
      <div>
        <b style={inline}>A: </b>
        <span style={inline}>{answerBody}</span>
      </div>
      <span>
        <AnswerInfo answerData={answerData} />
        <AnswerPictureListComponent answerData={answerData} />
      </span>
    </ul>
  );
}

export default AnswerListEntry;
