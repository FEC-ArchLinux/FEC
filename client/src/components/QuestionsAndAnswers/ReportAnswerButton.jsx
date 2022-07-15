import React from "react";

function ReportAnswerButton() {
  const inline = {
    display: "inline-flex",
    padding: '0 10px 0',
  };

  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    'text-decoration': 'underline',
    display: 'inline',
    margin: '0',
    padding: '0px 1vw 0 1vw',
    height: '1em',
  };

  return (
    <button style={linkButton}>Report</button>
  );
}

export default ReportAnswerButton;
