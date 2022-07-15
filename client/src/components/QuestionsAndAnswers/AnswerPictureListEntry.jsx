import React from "react";

function AnswerPictureListEntry({ picture }) {
  const answerImage = {
    height: '90px',
    width: '90px',
    padding: '10px',
  };
  return (
    <img
      src={picture}
      alt=""
      style={answerImage}
    />
  );
}

export default AnswerPictureListEntry;
