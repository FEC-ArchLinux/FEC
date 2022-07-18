/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AnswerPictureListEntry from "./AnswerPictureListEntry.jsx";

function AnswerPictureList({ answerPictureList }) {
  return (
    <div>
      {answerPictureList && answerPictureList.map((picture, index) => (
        <AnswerPictureListEntry
          key={picture}
          picture={picture}
        />
      ))}
    </div>
  );
}

export default AnswerPictureList;
