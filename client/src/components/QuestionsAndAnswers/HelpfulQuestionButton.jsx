import React from "react";

function HelpfulQuestionButton() {
  const inline = {
    display: "inline-flex",
    height: '30px',
  };

  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    'text-decoration': 'underline',
    display: 'inline',
    margin: '0',
    padding: '0',
  };

  return (
    <span style={inline}>
      <p>Helpful?</p>
      <button
        type="button"
        style={linkButton}
      >
        Yes
      </button>
      <p>(28)</p>
    </span>
  );
}

export default HelpfulQuestionButton;
