import React from "react";

function ReportAnswerButton() {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <button style={linkButton}>Report</button>
  );
}

export default ReportAnswerButton;
