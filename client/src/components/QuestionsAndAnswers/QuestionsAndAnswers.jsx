/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import QuestionsSearch from "./QuestionsSearch.jsx";
import QuestionsList from "./QuestionsList.jsx";
import AddAQuestion from "./AddAQuestion.jsx";
import MoreAnsweredQuestions from "./MoreAnsweredQuestions.jsx";
import GH_TOKEN from '../../../../token.js';

const inline = {
  // display: "inline-flex",
};

const MainFlex = styled.div`
  margin: auto;
`;

const TopContainer = styled.div`
  display: flex;
`;

function QuestionsAndAnswers({ productId }) {
  const [questionsData, setQuestionData] = useState([]);
  const [moreAnsweredQuestions, setMoreAnsweredQuestions] = useState(false);

  function getQuestionsAndAnswers() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${productId}`,
      {
        headers: { authorization: GH_TOKEN },
      },
    )
      .then((data) => {
        setQuestionData(data.data.results);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getQuestionsAndAnswers();
  }, [productId]);

  return (
    <TopContainer>
      <MainFlex>
        <h3>{`QUESTIONS ${'&'} ANSWERS`}</h3>
        <QuestionsSearch productId={productId} />
        <QuestionsList
          questionsData={questionsData}
          moreAnsweredQuestions={moreAnsweredQuestions}
        />
        <span style={inline}>
          <MoreAnsweredQuestions
            questionsData={questionsData}
            moreAnsweredQuestions={moreAnsweredQuestions}
            setMoreAnsweredQuestions={setMoreAnsweredQuestions}
          />
          <AddAQuestion productId={productId} />
        </span>
      </MainFlex>
    </TopContainer>
  );
}

export default QuestionsAndAnswers;
