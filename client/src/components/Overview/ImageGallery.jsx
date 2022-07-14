import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

function ImageGallery({ styles, activeStyle, bigPictureDivStyle, toggleExpandedView }, ref) {
  const [activeImage, setActiveImage] = useState(0);

  // pass up to overview function that resets the big image to the first after changing styles
  useImperativeHandle(ref, () => ({
    selectBigPicture: () => {
      setActiveImage(0);
    },
  }));

  function selectBigPicture(e) {
    setActiveImage(parseInt(e.target.name));
  }

  function changeBigPicture(e) {
    switch (e.target.id) {
      case "decrement": {
        if (activeImage === 0) {
          break;
        }
        setActiveImage(activeImage - 1);
        break;
      }
      case "increment": {
        if (activeImage === styles[activeStyle].photos.length - 1) {
          break;
        }
        setActiveImage(activeImage + 1);
        break;
      }
    }
  }

  const imageGalleryStyle = {
    'object-fit': 'cover',
    height: "calc(2vw + 2vh + 30px)",
    width: "calc(2vw + 2vh + 30px)",
    border: 'thin solid black',
    margin: '5px',
  };

  const activeImageStyle = {
    'object-fit': 'cover',
    height: "calc(2vw + 2vh + 30px)",
    width: "calc(2vw + 2vh + 30px)",
    border: 'thick solid black',
    margin: '5px',
  };

  const bigImageStyle = {
    'max-height': '100%',
    'max-width': '100%',
  };

  const imageGalleryDivStyle = {
    display: 'grid',
    'min-width': '110px',
    overflow: 'clip auto',
    'max-height': '100%',
    'justify-items': 'center',
  };

  const ExpandButton = styled.button`
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    font-size: x-large;
    opacity: 50%;
    border: none;
    &:hover {
      background-color: lightgray;
    }`;

  const RightArrowButton = styled.button`
    background-color: whitesmoke;
    border: none;
    font-size: x-large;
    position: absolute;
    right: 0;
    opacity: 50%;
    &:hover {
      background-color: lightgray;
    }`;

  const LeftArrowButton = styled.button`
    background-color: whitesmoke;
    border: none;
    font-size: x-large;
    position: absolute;
    left: 0;
    opacity: 50%;
    &:hover {
      background-color: lightgray;
    }`;

  let index = -1;
  return (
    <>
      <div style={imageGalleryDivStyle}>
        {styles && styles[activeStyle].photos.map((photo) => {
          index++
          if (index === activeImage) {
            return (
              <img style={activeImageStyle} onClick={selectBigPicture} name={index} src={photo.url} alt="style-img" />
            );
          }
          return (
            <img style={imageGalleryStyle} onClick={selectBigPicture} name={index} src={photo.url} alt="style-img" />
          );
        })}
      </div>
      <div style={bigPictureDivStyle}>
        <LeftArrowButton type="button" id="decrement" onClick={changeBigPicture}>⇦</LeftArrowButton>
        <img style={bigImageStyle} src={styles && styles[activeStyle].photos[activeImage].url} alt="enlarged-style" />
        <ExpandButton onClick={toggleExpandedView}>↔</ExpandButton>
        <RightArrowButton type="button" id="increment" onClick={changeBigPicture}>⇨</RightArrowButton>
      </div>
    </>
  );
}

export default forwardRef(ImageGallery);
