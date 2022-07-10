import React from 'react';

function StyleSelector({ styles, setActiveStyle }) {
  function changeActiveStyle(e) {
    setActiveStyle(e.target.id);
  }

  if (styles) {
    let index = -1;
    return (
      <>
        <h3>Style Selector</h3>
        {styles.map((style) => {
          index++
          return <button onClick={changeActiveStyle} id={index} key={style.style_id}>{style.name}</button>;
        })}
      </>
    );
  }
  return <span>Loading...</span>;
}

export default StyleSelector;
