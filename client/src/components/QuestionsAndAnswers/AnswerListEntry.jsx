/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AnswerInfo from "./AnswerInfo.jsx";
import AnswerPictureListComponent from "./AnswerPictureListComponent.jsx";

const inline = {
  // display: "inline-flex",
  padding: '0 10px 0',
  // fontSize: '1em',
};

function AnswerListEntry({ answerData }) {
  const answerBody = answerData.body;
  const answerId = answerData.answer_id;
  return (
    <ul style={{ paddingInlineStart: '0' }}>
      <div>
        <b style={inline}>A:</b>
        {answerBody}
      </div>
      <span>
        {!answerData.photos.length ? <AnswerInfo answerId={answerId} answerData={answerData} /> : null}
        <AnswerPictureListComponent answerData={answerData} />
      </span>
    </ul>
  );
}

export default AnswerListEntry;
