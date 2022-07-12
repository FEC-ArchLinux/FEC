import React from "react";

const questionSearchStyle = {
  border: "solid",
  borderWidth: "thin",
  width: "60vw",
  height: "60px",

};

function QuestionsSearch() {
  return (
    <div style={questionSearchStyle}>
      <input style={{
        width: "55vw",
        height: "60px",
        fontSize: "large",
        fontStyle: "bold",
        padding: "0vw 1vw",
        borderWidth: "0em"
      }}
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS" />
      <button style={{
        margin: "auto",
        width: "2vw",
        border: "none",
        padding: "1vw",
      }}
      type="submit">🔍</button>
    </div>
  );
}

export default QuestionsSearch;
