import React from 'react';
// import styled, { css } from 'styled-components';

function StyleSelector({ styles, changeActiveStyle, activeStyle }) {
  if (styles) {
    let index = -1;
    return (
      <>
        <h3>Style Selector</h3>
        <p>
          Style
          {" > "}
          {styles[activeStyle].name}
        </p>
        {styles.map((style) => {
          index++
          return <img width="50px" alt="style_thumbnail" src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} key={style.style_id} />;
        })}
      </>
    );
  }
  return <p>Loading Style Selector...</p>;
}

export default StyleSelector;
