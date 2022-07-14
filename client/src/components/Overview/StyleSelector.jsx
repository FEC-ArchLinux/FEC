import React from 'react';

function StyleSelector({ styles, changeActiveStyle, activeStyle }) {
  const styleImgStyle = {
    'object-fit': 'cover',
    height: "calc(2vh + 2vw)",
    width: "calc(2vh + 2vw)",
    border: 'medium solid black',
    'border-radius': '50%',
    margin: '5px',
  };

  const selectedStyleImg = {
    'object-fit': 'cover',
    height: "calc(2vh + 2vw)",
    width: "calc(2vh + 2vw)",
    border: 'thick solid black',
    'border-radius': '50%',
    margin: '5px',
  };

  const styleContainerStyle = {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'flex-start',
    'align-items': 'center',
    overflow: 'auto',
    'max-height': '250px',
  };

  let index = -1;
  return (
    <div>
      <h3>Styles:</h3>
      <p>
        Style
        {" > "}
        {styles && styles[activeStyle].name}
      </p>
      <div style={styleContainerStyle}>
        {styles && styles.map((style) => {
          index++
          if (index === activeStyle) {
            return <img style={selectedStyleImg} alt={style.name} src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />;
          }
          return <img style={styleImgStyle} alt={style.name} src={style.photos[0].thumbnail_url} onClick={changeActiveStyle} id={index} name={style.style_id} key={style.style_id} />;
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
