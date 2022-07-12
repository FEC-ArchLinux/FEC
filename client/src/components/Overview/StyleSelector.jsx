import React from 'react';
// import styled, { css } from 'styled-components';

function StyleSelector({ styles, changeActiveStyle, activeStyle }) {
  const styleImgStyle = {
    'object-fit': 'cover',
    height: '60px',
    width: '60px',
    border: 'medium solid black',
    'border-radius': '50%',
    'margin-left': '10px',
  };

  const selectedStyleImg = {
    'object-fit': 'cover',
    height: '60px',
    width: '60px',
    border: 'thick solid black',
    'border-radius': '50%',
    'margin-left': '10px',
  };

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
        if (index === activeStyle) {
          return <img style={selectedStyleImg} alt={style.name} src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />;
        }
        return <img style={styleImgStyle} alt={style.name} src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />;
      })}
    </>
  );
}

export default StyleSelector;
