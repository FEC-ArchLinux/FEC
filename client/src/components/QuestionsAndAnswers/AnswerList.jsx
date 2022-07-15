import React from "react";
import AnswerListEntry from "./AnswerListEntry.jsx";

function AnswerList({ answerList }) {
  const answerIds = Object.keys(answerList);
  const limit = limit || 2;

  return (
    <>
      {answerIds.map((answerId, index) => {
        const answerData = answerList[answerId];
        if (index < limit) {
          return (
            <AnswerListEntry
              key={answerId}
              answerData={answerData}
            />
          );
        }
        return <></>;
      })}
    </>
  );
}

export default AnswerList;
