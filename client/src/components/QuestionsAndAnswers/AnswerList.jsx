import React from "react";
import AnswerListEntry from "./AnswerListEntry.jsx";

function AnswerList() {
  const answerListPlaceholder = [1, 2];
  return (
    <>
      {answerListPlaceholder.map((answer) => <AnswerListEntry />)}
    </>
  )
}

export default AnswerList;
