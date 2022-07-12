import React from "react";

function ReportAnswerButton() {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'medium',
    'text-decoration': 'underline',
    display: 'inline',
    // margin: '0',
    padding: '18px 1vw 0 1vw',
  };

  return (
    <button style={linkButton}>Report</button>
  );
}

export default ReportAnswerButton;
