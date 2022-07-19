import React from 'react';
import styled from 'styled-components';

function StyleSelector({ styles, changeActiveStyle, activeStyle, placeHolderImage }) {
  const StyleImg = styled.img`
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: calc(100% - 10px);
    border: medium solid black;
    border-radius: 50%;
    margin: 5px;
    :hover {
      cursor: pointer;
    }
  `;

  const styleContainerStyle = {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'flex-start',
    'align-items': 'center',
    'max-height': '250px',
    'max-width': '100%',
  };

  const Checkmark = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    aspect-ratio: 1 / 1;
    width: 25%;
  `;

  let index = -1;
  return (
    <div>
      <h3 style={{'margin-top': '0.5em'}}>Styles:</h3>
      <p>
        Style
        {" > "}
        {styles && styles[activeStyle].name}
      </p>
      <div style={styleContainerStyle}>
        {styles && styles.map((style) => {
          index++
          if (index === activeStyle) {
            return (
              <div style={{ position: 'relative', width: "25%" }}>
                <StyleImg alt={style.name} src={style.photos[0].thumbnail_url === null ? placeHolderImage : style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />
                <Checkmark src='https://www.pinclipart.com/picdir/big/523-5232109_check-mark-computer-icons-clip-art-green-checkmark.png' />
              </div>);
          }
          return (
            <div style={{ position: 'relative', width: "25%" }}>
              <StyleImg alt={style.name} src={style.photos[0].thumbnail_url === null ? placeHolderImage : style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />
            </div>);
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
