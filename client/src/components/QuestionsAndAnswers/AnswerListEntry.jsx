import React from "react";
import AnswerInfo from "./AnswerInfo.jsx";

function AnswerListEntry() {
  return (
    <>
      <div>
        <b>A: </b>
        Answer here
      </div>
      <span>
        <AnswerInfo />
      </span>
    </>
  );
}

export default AnswerListEntry;
