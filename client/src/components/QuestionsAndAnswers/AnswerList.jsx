/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import AnswerListEntry from "./AnswerListEntry.jsx";

function AnswerList({ answerList }) {
  const answerIds = Object.keys(answerList);
  const [answerListCount, SetAnswerListCount] = useState(true);

  // do not render when there are no answers to a question
  if (answerIds.length === 0) {
    return null;
  }

  // When there is only 1 answer, do not render the 'See more answers' button
  if (answerIds.length === 1) {
    const answerData = answerList[answerIds[0]];
    return (
      <AnswerListEntry
        key={answerIds[0]}
        answerId={answerIds[0]}
        answerData={answerData}
      />
    );
  }
  const sortedAnswerIds = answerIds.sort((b, a) => (
    answerList[a].helpfulness - answerList[b].helpfulness
  ));
  return (
    <>
      {sortedAnswerIds.map((answerId, index) => {
        const answerData = answerList[answerId];
        if (answerListCount) {
          if (index < 1) {
            return (
              <AnswerListEntry
                key={answerId}
                answerId={answerId}
                answerData={answerData}
              />
            );
          }
          return null;
        }
        return (
          <AnswerListEntry
            key={answerId}
            answerId={answerId}
            answerData={answerData}
          />
        );
      })}
      <LinkButton
        type="button"
        onClick={() => SetAnswerListCount(!answerListCount)}
      >
        {answerListCount === true ? 'See more answers' : 'Collapse answers'}
      </LinkButton>
    </>
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

export default AnswerList;
