import React from "react";
import AnswerPictureListEntry from "./AnswerPictureListEntry.jsx";

function AnswerPictureList({ answerPictureList }) {
  return (
    <>
      {answerPictureList.map((picture) => (<AnswerPictureListEntry
        picture={picture}/>))}
    </>
  );
}

export default AnswerPictureList;
