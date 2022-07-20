/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const boxButtonStyle = {
  margin: "0 2vw 0 0",
  fontSize: "large",
  fontStyle: "bold",
  border: "solid",
  borderWidth: "1px",
  height: '40px',
  cursor: 'pointer',
  backgroundColor: 'white',
};

const disabledBoxButtonStyle = {
  margin: "0 2vw 0 0",
  fontSize: "large",
  color: "grey",
  border: "solid",
  borderWidth: "1px",
  height: '40px',
  cursor: 'not-allowed',
  backgroundColor: 'white',
};

function MoreAnsweredQuestions({ questionsData, setMoreAnsweredQuestions, moreAnsweredQuestions }) {
  if (questionsData.length < 2 || moreAnsweredQuestions) {
    return (
      <button
      style={disabledBoxButtonStyle}
    >
      MORE ANSWERED QUESTIONS
    </button>
    )
  }
  return (
    <button
      type="button"
      style={boxButtonStyle}
      onClick={() => setMoreAnsweredQuestions(true)}
    >
      MORE ANSWERED QUESTIONS
    </button>
  );
}

export default MoreAnsweredQuestions;
