import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import QuestionsSearch from "./QuestionsSearch.jsx";
import QuestionsList from "./QuestionsList.jsx";
import AddAQuestion from "./AddAQuestion.jsx";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions.jsx";
import GH_TOKEN from '../../../../token.js';

const inline = {
  display: "inline-flex",
};
// const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${productId}`;

function QuestionsAndAnswers({ productId }) {
  const [questionsData, setQuestionData] = useState([]);

  function getQuestionsAndAnswers() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${productId}`,
      {
        headers: { authorization: GH_TOKEN },
      },
    )
      .then((data) => {
        setQuestionData(data.data.results);
      }, [])
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getQuestionsAndAnswers();
  }, []);
  return (
    <span>
      <h2>{`Questions ${'&'} Answers`}</h2>
      <QuestionsSearch productId={productId} />
      <QuestionsList questionsData={questionsData} />
      <span style={inline}>
        <MoreAnsweredQuestions productId={productId} />
        <AddAQuestion productId={productId} />
      </span>
    </span>
  );
}

export default QuestionsAndAnswers;
