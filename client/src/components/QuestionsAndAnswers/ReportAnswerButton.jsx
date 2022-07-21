import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";
import styled from "styled-components";

function ReportAnswerButton({ answerId }) {
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

  const reportAnswerURI = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${answerId}/report/`;

  if (reportedAnswer) {
    return (
      <span><b> Reported</b></span>
    );
  }
  return (
    <LinkButton
      onClick={() => {
        clickReportButton();
      }}
    >
      Report
    </LinkButton>
  );
}

const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  fontSize: medium;
  color: grey;
  text-decoration: none;
  &:hover {
    fontStyle: bold;
    text-decoration: underline;
  }
`;

export default ReportAnswerButton;
