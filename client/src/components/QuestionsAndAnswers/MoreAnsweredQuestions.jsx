/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styled from "styled-components";

function MoreAnsweredQuestions({ questionsData, setMoreAnsweredQuestions, moreAnsweredQuestions }) {
  if (questionsData.length < 2 || moreAnsweredQuestions) {
    return (
      <DisabledBoxButtonStyle>
        MORE ANSWERED QUESTIONS
      </DisabledBoxButtonStyle>
    );
  }
  return (
    <BoxButtonStyle
      type="button"
      onClick={() => setMoreAnsweredQuestions(true)}
    >
      MORE ANSWERED QUESTIONS
    </BoxButtonStyle>
  );
}

const DisabledBoxButtonStyle = styled.button`
  margin: 0 2vw 0 0;
  font-size: large;
  color: grey;
  border: solid;
  border-width: 1px;
  height: 40px;
  cursor: not-allowed;
  background-color: white;
`;

const BoxButtonStyle = styled.button`
  margin: 0 2vw 0 0;
  font-size: large;
  font-style: bold;
  border: solid;
  border-width: 1px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  border-radius: 0 0 3px 3px;
`;

export default MoreAnsweredQuestions;
