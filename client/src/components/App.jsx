import React, { useState } from "react";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
// eslint-disable-next-line import/extensions
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";

function App() {
  const [productId, setProductId] = useState(37311);

  return (
    <>
      <h1>Hello World from App</h1>
      <Overview productId={productId} />
      <RelatedItemsAndComparison productId={productId} setProductId={setProductId} />
      <QuestionsAndAnswers productId={productId} />
      <RatingsAndReviews productId={productId} />
    </>
  );
}

export default App;
