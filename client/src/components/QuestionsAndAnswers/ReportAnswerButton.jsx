import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";

function ReportAnswerButton({ answerId }) {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const [reportedAnswer, setReportedAnswer] = useState(false);
  const reportAnswerConfig = {
    method: 'put',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/553755/helpful/',
    headers: {
      authorization: GH_TOKEN,
      "content-type": 'application/json',
    },
    data: JSON.stringify({ answer_id: answerId }),
  };

  function clickReportButton() {
    axios(reportAnswerConfig)
      .then(() => setReportedAnswer(true))
      .catch((error) => console.error(error));
  }

  let reportAnswerURI = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${answerId}/report/`;

  if (reportedAnswer) {
    return (
      <span><b> Reported</b></span>
    );
  }
  return (
    <button
      style={linkButton}
      onClick={() => {
        clickReportButton()}
      }
    >Report</button>
  );
}

export default ReportAnswerButton;
