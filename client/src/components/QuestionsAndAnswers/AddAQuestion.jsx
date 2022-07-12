import React from "react";

const boxButtonStyle = {
  margin: "0 1vw 1vw 0",
  fontSize: "large",
  fontStyle: "bold",
  border: "solid",
  borderWidth: "1px",
  height: '60px',
};

function AddAQuestion() {
  return (
    <button style={boxButtonStyle}>ADD A QUESTION ➕</button>
  );
}

export default AddAQuestion;
