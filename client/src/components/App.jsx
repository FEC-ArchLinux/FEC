import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";

function App() {
  const [productId, setProductId] = useState(37333);
  const placeHolderImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45f8f027-ab1f-4fdd-aa1f-a1eec3a113e4/de4fxss-10c12562-e487-40f4-8972-f0ea54ac59c3.png/v1/fill/w_726,h_816,strp/spongebob_face__meme__by_cmors12_de4fxss-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvNDVmOGYwMjctYWIxZi00ZmRkLWFhMWYtYTFlZWMzYTExM2U0XC9kZTRmeHNzLTEwYzEyNTYyLWU0ODctNDBmNC04OTcyLWYwZWE1NGFjNTljMy5wbmciLCJ3aWR0aCI6Ijw9NzI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UJu9FG4YOqVzRIacvpo0xaUxOfSeOpKhbhoJ_KSebTg';

  const [theme, setTheme] = useState('light');

  function themeToggle() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const light = {
    body: 'white',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  };
  const dark = {
    body: '#181A18',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  };
  const themeStyle = {
    background: theme === 'light' ? light.body : dark.body,
    color: theme === 'light' ? light.text : dark.text,
    transition: 'all 0.25s linear',
  };

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <button onClick={themeToggle} type="button">theme</button>
      <div style={themeStyle}>
        <h1>Hello World from App {productId}</h1>
        <Overview productId={productId} placeHolderImage={placeHolderImage} />
        <RelatedItemsAndComparison productId={productId} setProductId={setProductId} placeHolderImage={placeHolderImage} />
        <QuestionsAndAnswers productId={productId} />
        <RatingsAndReviews productId={productId} />
      </div>
    </ThemeProvider>
  );
}

export default App;
