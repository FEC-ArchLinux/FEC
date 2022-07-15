import React from "react";

function HelpfulButton({ helpfulness }) {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    // fontSize: '15px',
    'text-decoration': 'underline',
    display: 'inline-flex',
    // margin: '0',
    padding: '0px 10px 0 10px',
    height: "1em",
  };
  const inline = {
    display: "inline-flex",
    padding: '0 10px 0',
    // height: '30px',
  };

  return (
      <span style={inline}>
        Helpful?&nbsp;
        <button style={linkButton}> Yes </button>
        {`(${helpfulness})`}
      </span>
  );
}

export default HelpfulButton;
