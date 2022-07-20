import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import GH_TOKEN from "../../../token.js";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedItemsAndComparison/RelatedItemsAndComparison.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";

function App() {
  const [productId, setProductId] = useState(37314);
  const placeHolderImage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45f8f027-ab1f-4fdd-aa1f-a1eec3a113e4/de4fxss-10c12562-e487-40f4-8972-f0ea54ac59c3.png/v1/fill/w_726,h_816,strp/spongebob_face__meme__by_cmors12_de4fxss-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvNDVmOGYwMjctYWIxZi00ZmRkLWFhMWYtYTFlZWMzYTExM2U0XC9kZTRmeHNzLTEwYzEyNTYyLWU0ODctNDBmNC04OTcyLWYwZWE1NGFjNTljMy5wbmciLCJ3aWR0aCI6Ijw9NzI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UJu9FG4YOqVzRIacvpo0xaUxOfSeOpKhbhoJ_KSebTg";

  const [theme, setTheme] = useState("light");

  const searchBarRef = useRef();

  function themeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const light = {
    body: "white",
    text: "#363537",
    toggleBorder: "#FFF",
    gradient: "linear-gradient(#39598A, #79D7ED)",
  };
  const dark = {
    body: "#181A18",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
  };
  const themeStyle = {
    background: theme === "light" ? light.body : dark.body,
    color: theme === "light" ? light.text : dark.text,
    transition: "all 0.25s linear",
    "margin-top": "11vh",
  };

  const logoStyle = {
    "max-height": "80%",
    "margin-left": "1vw",
    "aspect-ratio": "1/1",
  };

  const SearchButton = styled.button`
    font-size: calc(1.5vh + 1pt);
    border-width: calc(0.3vh + 2px);
    border-color: black;
    margin: calc(0.3vh + 2px);
    background-color: white;
    cursor: pointer;
    :hover {
      background-color: lightgrey;
    }
  `;

  const Toolbar = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100%;
    background-image: linear-gradient(45deg, lightgreen, lightskyblue);
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-bottom: 5px solid black;
    z-index: 10;
  `;

  async function handleSearch() {
    event.preventDefault();
    const searchedTerm = searchBarRef.current.value;
    try {
      await axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${searchedTerm}`,
        {
          headers: {
            authorization: GH_TOKEN,
          },
        }
      );
      setProductId(searchBarRef.current.value);
    } catch (err) {
      alert(err.response.data);
    }
  }

  const Input = styled.input`
    font-size: calc(1.5vh + 1pt);
    border-color: black;
    border-width: calc(0.3vh + 2px);
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;

  const ThemeButton = styled(SearchButton)`
    margin-right: 1vw;
  `;

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Toolbar>
        <a style={logoStyle} href="/">
          <img
            style={{ height: "100%" }}
            src="http://www.osboxes.org/wp-content/uploads/photo-gallery/post_logos/Archlinux-logo.png"
            alt="arch-linux-logo"
          />
        </a>
        <form onSubmit={handleSearch}>
          <Input
            placeholder="Enter Product ID"
            required
            type="number"
            ref={searchBarRef}
          />
          <SearchButton type="submit">Go</SearchButton>
        </form>
        <ThemeButton
          style={{ "margin-right": "1vw" }}
          onClick={themeToggle}
          type="button"
        >
          Toggle Theme
        </ThemeButton>
      </Toolbar>
      <div style={themeStyle}>
        <Overview productId={productId} placeHolderImage={placeHolderImage} />
        <RelatedItemsAndComparison
          productId={productId}
          setProductId={setProductId}
          placeHolderImage={placeHolderImage}
        />
        <QuestionsAndAnswers productId={productId} />
        <RatingsAndReviews productId={productId} />
      </div>
    </ThemeProvider>
  );
}

export default App;
