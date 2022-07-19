import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";

function HelpfulButton({ helpfulness, answerId }) {
  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

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
      <button
        type="button"
        style={linkButton}
        onClick={() => clickHelpfulButton()}
      > Yes </button>
      {`(${helpfulness})`}
    </span>
  );
}

export default HelpfulButton;
