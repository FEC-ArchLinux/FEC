/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";

const questionSearchStyle = {
  border: "solid",
  maxWidth: "860px",
  borderWidth: "thin",
  width: "80vw",
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
  width: "75vw",
  maxWidth: "860px",
  height: "40px",
  fontSize: "large",
  fontStyle: "bold",
  padding: "0vw 1vw",
  borderWidth: "0em",
};
// // useRef hook
// function QuestionsSearch() {
//   const inputSearchValue = useRef('');
//   const onSearchInput = () => {
//     inputSearchValue.current.focus();
//   };
//   return (
//     <>
//       <input
//         style={questionSearchStyle}
//         ref={inputSearchValue}
//         type="text"
//         placeholder="Have a question? Search for answers..."
//         onChange={onSearchInput}
//       />
//     </>
//   );
// }
// function QuestionsSearch() {
//   const inputSearchValue = useRef('');
//   const onSearchInput = () => {
//     inputSearchValue.current;
//   };
//   return (
//     <>
//       <input
//         style={questionSearchStyle}
//         ref={inputSearchValue}
//         type="text"
//         placeholder="Have a question? Search for answers..."
//         onChange={onSearchInput}
//       />
//     </>
//   );
// }

function QuestionsSearch({ questionSearchInput, setQuestionSearchInput }) {
  return (
    <div style={questionSearchStyle}>
      <input
        style={inputStyle}
        onChange={(e) => {
          setQuestionSearchInput(e.target.value);
        }}
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
