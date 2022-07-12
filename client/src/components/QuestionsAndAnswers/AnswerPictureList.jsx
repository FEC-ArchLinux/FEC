import React from "react";
import AnswerPictureListEntry from "./AnswerPictureListEntry.jsx";

function AnswerPictureList() {
  const answerPictureListPlaceholder = [1, 2];
  return (
    <>
      {answerPictureListPlaceholder.map((picture) => (<AnswerPictureListEntry />))}
    </>
  );
}

export default AnswerPictureList;
