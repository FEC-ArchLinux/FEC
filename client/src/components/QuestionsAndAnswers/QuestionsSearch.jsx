import React from "react";

const questionSearchStyle = {
  border: "solid",
  borderWidth: "thin",
  width: "60vw",
  height: "40px",
  display: "inline-flex",

};

const buttonStyle = {
  margin: "auto",
  width: "2em",
  height: "2em",
  border: "none",
  background: "transparent",
  padding: "0 2em 0 0",
  display: "inline",
  cursor: "pointer",
};

const inputStyle = {
  width: "55vw",
  height: "40px",
  fontSize: "large",
  fontStyle: "bold",
  padding: "0vw 1vw",
  borderWidth: "0em",
};

function QuestionsSearch() {
  return (
    <div style={questionSearchStyle}>
      <input
        style={inputStyle}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
      />
      <button
        style={buttonStyle}
        type="submit"
      >
        🔍
      </button>
    </div>
  );
}

export default QuestionsSearch;
