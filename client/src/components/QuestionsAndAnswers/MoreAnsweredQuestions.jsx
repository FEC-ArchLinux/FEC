import React from "react";

const boxButtonStyle = {
  margin: "0 1vw 1vw 0",
  fontSize: "large",
  fontStyle: "bold",
  border: "solid",
  borderWidth: "1px",
  height: '40px',
  cursor: 'pointer',
  backgroundColor: 'white',
};

function MoreAnsweredQuestions() {
  return (
    <button style={boxButtonStyle}>
      MORE ANSWERED QUESTIONS
    </button>
  );
}

export default MoreAnsweredQuestions;
