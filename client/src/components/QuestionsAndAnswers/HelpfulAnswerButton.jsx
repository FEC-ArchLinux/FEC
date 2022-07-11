import React from "react";

function HelpfulAnswerButton() {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    display: 'inline',
    margin: '0',
    padding: '0',
  };

  return (
    <span style={{display: "inline-flex"}}>
      <p>Helpful?</p>
      <button style={linkButton}>Yes</button>
      <p>{"(0)"}</p>
    </span>
  );
}

export default HelpfulAnswerButton;
