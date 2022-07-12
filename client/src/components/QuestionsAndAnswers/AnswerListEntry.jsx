import React from "react";
import AnswerInfo from "./AnswerInfo.jsx";
import AnswerPictureListComponent from "./AnswerPictureListComponent.jsx";

function AnswerListEntry() {
  return (
    <>
      <div>
        <b>A: </b>
        Answer here
      </div>
      <span>
        <AnswerInfo />
        <AnswerPictureListComponent />
      </span>
    </>
  );
}

export default AnswerListEntry;
