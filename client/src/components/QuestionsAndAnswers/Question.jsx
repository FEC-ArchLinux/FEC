import React from "react";

function Question({ questionBody }) {
  return (
    <span>
      <b>{`Q:  ${questionBody}`}</b>
    </span>
  );
}

export default Question;
