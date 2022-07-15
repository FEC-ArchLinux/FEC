import React, { useState } from "react";
import AnswerListEntry from "./AnswerListEntry.jsx";

function AnswerList({ answerList }) {
  const answerIds = Object.keys(answerList);
  const [answerListCount, SetAnswerListCount] = useState(true);

  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'medium',
    fontStyle: 'extra-bold',
    textDecoration: 'underline',

  };

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
        answerData={answerData}
      />
    );
  }

  // When there is more than 1 answer, include the 'See more answers' button
  return (
    <>
      {answerIds.map((answerId, index) => {
        const answerData = answerList[answerId];
        if (answerListCount) {
          if (index < 1) {
            return (
              <AnswerListEntry
                key={answerId}
                answerData={answerData}
              />
            );
          }
          return null;
        }
        return (
          <AnswerListEntry
            key={answerId}
            answerData={answerData}
          />
        );
      })}
      <button
        type="button"
        style={linkButton}
        onClick={() => SetAnswerListCount(!answerListCount)}
      >
        {answerListCount === true ? 'See more answers' : 'Collapse answers'}
      </button>
    </>
  );
}

export default AnswerList;
