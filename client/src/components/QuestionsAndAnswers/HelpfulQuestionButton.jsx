import React from "react";

function HelpfulQuestionButton({ questionHelpfulness }) {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    'text-decoration': 'underline',
    display: 'inline-flex',
    // margin: '0',
    padding: '0px 10px 0 10px',
  };
  const inline = {
    display: "inline-flex",
    padding: '0 10px 0',
    // height: '30px',
  };

  return (
    <span style={inline}>
      <span>Helpful?</span>
      <button
        type="button"
        style={linkButton}
      >
        Yes
      </button>
      <span>{`(${questionHelpfulness})`}</span>
    </span>
  );
}

export default HelpfulQuestionButton;
