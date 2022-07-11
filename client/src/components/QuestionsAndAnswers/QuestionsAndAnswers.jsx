import React from "react";
import axios from "axios";
import QuestionsSearch from "./QuestionsSearch.jsx";
import QuestionsList from "./QuestionsList.jsx";
import AddAQuestion from "./AddAQuestion.jsx";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions.jsx";

const inline = {
  display: "inline-flex",
  height: '30px',
};

function QuestionsAndAnswers() {
  return (
    <>
      <h2>{"Questions & Answers"}</h2>
      <QuestionsSearch />
      <QuestionsList />
      <span style={inline}>
        <MoreAnsweredQuestions />
        <AddAQuestion />
      </span>
    </>
  );
}

export default QuestionsAndAnswers;
