import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";

function HelpfulQuestionButton({ questionHelpfulness, questionId }) {
  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'medium',
    textDecoration: 'underline',
  };

  const [helpfulQuestion, setHelpfulQuestion] = useState(false);

  let helpfulQuestionURI = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/helpful/`;

  const helpfulQuestionConfig = {
    method: 'put',
    url: helpfulQuestionURI,
    headers: {
      authorization: GH_TOKEN,
      "content-type": 'application/json',
    },
    data: JSON.stringify({ question_id: questionId }),
  };

  function clickHelpfulButton() {
    axios(helpfulQuestionConfig)
      .then(() => setHelpfulQuestion(true))
      .catch((err) => console.error(err));
  }

  if (helpfulQuestion) {
    return (
      <span>
        <small>
        <b>Helpful ✔</b>
        {`(${questionHelpfulness + 1})`}
        </small>
      </span>
    );
  }
  return (
    <span>
      <small>
        Helpful?
        <LinkButton
          type="button"
          // style={linkButton}
          onClick={() => clickHelpfulButton()}
        >
          Yes
        </LinkButton>
        {`(${questionHelpfulness})`}
      </small>
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

export default HelpfulQuestionButton;
