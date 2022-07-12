import React from "react";
import axios from "axios";
import QuestionsSearch from "./QuestionsSearch.jsx";
import QuestionsList from "./QuestionsList.jsx";
import AddAQuestion from "./AddAQuestion.jsx";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions.jsx";

const inline = {
  display: "inline-flex",
  // width: "60vw",
  // border: "solid",
  // borderWidth: "1px",
  // height: '60px',
};

function QuestionsAndAnswers() {
  return (
    <span>
      <h2>{"Questions & Answers"}</h2>
      <QuestionsSearch />
      <QuestionsList />
      <span style={inline}>
        <MoreAnsweredQuestions />
        <AddAQuestion />
      </span>
    </span>
  );
}

export default QuestionsAndAnswers;
