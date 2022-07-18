import React, { useEffect } from "react";

const boxButtonStyle = {
  margin: "0 1vw 1vw 0",
  fontSize: "large",
  fontStyle: "bold",
  border: "solid",
  borderWidth: "1px",
  height: '40px',
  cursor: 'pointer',
  backgroundColor: 'white',
};

function MoreAnsweredQuestions({ questionsData, moreAnsweredQuestions, setMoreAnsweredQuestions }) {
  questionsData.length = 0;
  questionsData.forEach(q => questionsData.length += 1);
  if (questionsData.length < 1) {
    return null;
  }
  if (moreAnsweredQuestions === questionsData.length) {
    return null;
  }

  useEffect(() => {
    let limit = moreAnsweredQuestions;
    console.log('oy', limit);
  }, [moreAnsweredQuestions]);
  function increaseQuestionsList() {
    setMoreAnsweredQuestions(moreAnsweredQuestions + 2);
  }

  return (
    <button
      type="button"
      style={boxButtonStyle}
      onClick={() => setMoreAnsweredQuestions()}
    >
      MORE ANSWERED QUESTIONS
    </button>
  );
}

export default MoreAnsweredQuestions;
