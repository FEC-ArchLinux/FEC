import React from "react";
import QuestionListEntry from "./QuestionListEntry.jsx";

function QuestionsList() {
  const qlist = [1, 2];
  return (
    <>
      {qlist.map(question => (
        <QuestionListEntry />
      ))}
    </>
  );
}

export default QuestionsList;
