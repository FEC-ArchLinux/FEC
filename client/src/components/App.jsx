import React, { useState } from "react";
import axios from 'axios';
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
// eslint-disable-next-line import/extensions
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";
import GH_TOKEN from '../../../token.js';

function App() {
  const [productId, setProductId] = useState(37311);
  const placeHolderImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45f8f027-ab1f-4fdd-aa1f-a1eec3a113e4/de4fxss-10c12562-e487-40f4-8972-f0ea54ac59c3.png/v1/fill/w_726,h_816,strp/spongebob_face__meme__by_cmors12_de4fxss-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvNDVmOGYwMjctYWIxZi00ZmRkLWFhMWYtYTFlZWMzYTExM2U0XC9kZTRmeHNzLTEwYzEyNTYyLWU0ODctNDBmNC04OTcyLWYwZWE1NGFjNTljMy5wbmciLCJ3aWR0aCI6Ijw9NzI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UJu9FG4YOqVzRIacvpo0xaUxOfSeOpKhbhoJ_KSebTg';

  function clickTracker(e, module) {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions',
      {
        element: e.target.outerHTML,
        widget: module,
        time: new Date(),
      },
      {
        headers: {
          authorization: GH_TOKEN,
        },
      }
    )
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  }

  return (
    <>
      <h1>Hello World from App {productId}</h1>
      <Overview productId={productId} placeHolderImage={placeHolderImage} clickTracker={clickTracker} />
      <RelatedItemsAndComparison productId={productId} setProductId={setProductId} placeHolderImage={placeHolderImage} clickTracker={clickTracker} />
      <QuestionsAndAnswers productId={productId} clickTracker={clickTracker} />
      <RatingsAndReviews productId={productId} clickTracker={clickTracker} />
    </>
  );
}

export default App;
