import React from "react";

const questionSearchStyle = {
  border: "solid",
  borderWidth: "thin",
  width: "60vw",
  height: "60px",

};

const buttonStyle = {
  margin: "auto",
  width: "2vw",
  border: "none",
  padding: "1vw",
};

const inputStyle = {
  width: "55vw",
  height: "60px",
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
