import React from "react";

function ReportAnswerButton() {
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
    <button style={linkButton}>Report</button>
  );
}

export default ReportAnswerButton;
