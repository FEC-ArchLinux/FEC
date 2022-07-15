import React from "react";

function HelpfulQuestionButton({ questionHelpfulness }) {
  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'medium',
    textDecoration: 'underline',
  };

  return (
    <span>
      <span>
        Helpful?
        <button
          type="button"
          style={linkButton}
        >
          Yes
        </button>
        {`(${questionHelpfulness})`}
      </span>
    </span>
  );
}

export default HelpfulQuestionButton;
