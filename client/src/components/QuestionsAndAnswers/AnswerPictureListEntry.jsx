import React from "react";

function AnswerPictureListEntry({ picture }) {
  const answerImage = {
    maxHeight: '90px',
    maxWidth: '180px',
    // height: '90px',
    // width: '90px',
    aspectRatio: 'auto',
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
