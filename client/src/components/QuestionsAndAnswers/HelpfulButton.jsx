import React from "react";

function HelpfulButton({ helpfulness }) {
  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <span>
      Helpful?
      <button type="button" style={linkButton}> Yes </button>
      {`(${helpfulness})`}
    </span>
  );
}

export default HelpfulButton;
