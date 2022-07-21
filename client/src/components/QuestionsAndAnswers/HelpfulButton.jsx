import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GH_TOKEN from "../../../../token.js";

function HelpfulButton({ helpfulness, answerId }) {
  const [helpful, setHelpful] = useState(false);

  const helpfulAnswerURI = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerId}/helpful/`;

  const helpfulAnswerConfig = {
    method: 'put',
    url: helpfulAnswerURI,
    headers: {
      authorization: GH_TOKEN,
      "content-type": 'application/json',
    },
    data: JSON.stringify({ answer_id: answerId }),
  };

  function clickHelpfulButton() {
    axios(helpfulAnswerConfig)
      .then(() => setHelpful(true))
      .catch((error) => console.error(error));
  }

  if (helpful) {
    return (
      <span>
        <b> Helpful ✔</b>
        {`(${helpfulness + 1})`}
      </span>
    );
  }
  return (
    <span>
      Helpful?
      <LinkButton
        type="button"
        onClick={() => clickHelpfulButton()}
      >
        Yes
      </LinkButton>
      {`(${helpfulness})`}
    </span>
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

export default HelpfulButton;
