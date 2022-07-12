import React from 'react';
// import styled, { css } from 'styled-components';

function StyleSelector({ styles, changeActiveStyle, activeStyle }) {
  let index = -1;
  return (
    <>
      <h3>Style Selector</h3>
      <p>
        Style
        {" > "}
        {styles && styles[activeStyle].name}
      </p>
      {styles && styles.map((style) => {
        index++
        return <img style={{marginLeft: "10px" }} height="100px" alt={style.name} src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} key={style.style_id} />;
      })}
    </>
  );
}

export default StyleSelector;
