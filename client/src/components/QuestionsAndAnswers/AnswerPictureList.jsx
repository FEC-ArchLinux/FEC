import React from "react";
import AnswerPictureListEntry from "./AnswerPictureListEntry.jsx";

function AnswerPictureList({ answerPictureList }) {
  return (
    <>
      {answerPictureList.map((picture, index) => (
        <AnswerPictureListEntry
          key={picture + index}
          picture={picture}
        />
      ))}
    </>
  );
}

export default AnswerPictureList;
