import react from "react";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
import RatingsAndReviews from"./RatingsAndReviews/RatingsAndReviews.jsx";

const App = () => {
  return (
    <>
      <h1>Hello World from App</h1>
      <Overview />
      <RelatedItemsAndComparison />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </>
  )
}

export default App;