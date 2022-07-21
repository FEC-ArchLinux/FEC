import React from "react";
import AnswerPictureList from "./AnswerPictureList.jsx";
import AnswerInfo from "./AnswerInfo.jsx";

function AnswerPictureListComponent({ answerData }) {
  const answerPictureList = answerData.photos
  if (answerPictureList.length) {
    return (
      <>
        <div>
          <AnswerPictureList
            answerPictureList={answerPictureList}
          />
        </div>
        <div>
          <AnswerInfo answerData={answerData} />
        </div>
      </>
    );
  }
}

export default AnswerPictureListComponent;
