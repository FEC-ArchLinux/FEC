import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import styled, { css } from 'styled-components';

function ImageGallery({ styles, activeStyle, isExpanded, toggleExpandedView, placeHolderImage }, ref) {
  const [activeImage, setActiveImage] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageGalleryRef = useRef();

  // pass up to overview function that resets the big image to the first after changing styles
  useImperativeHandle(ref, () => ({
    selectBigPicture: () => {
      setActiveImage(0);
    },
  }));

  function selectBigPicture(e) {
    setActiveImage(Number(e.target.name));
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
      default:
        console.log('Error with arrows: ', e.target.id);
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
    overflow: 'clip hidden',
    'max-height': '100%',
    'justify-items': 'center',
    'scroll-behavior': 'smooth',
  };

  const overviewButtonStyle = css`
    border: none;
    font-size: x-large;
    opacity: 50%;
    background-color: whitesmoke;
    &:hover {
      background-color: lightgray;
    }`;

  const ExpandButton = styled.button`
    ${overviewButtonStyle};
    top: 0;
    right: 0;
    position: absolute;
    visibility: ${isExpanded ? (isZoomed ? 'hidden' : 'visible') : 'hidden'};
    `;

  const RightArrowButton = styled.button`
    ${overviewButtonStyle}
    right: 0;
    position: absolute;
    visibility: ${styles && activeImage === styles[activeStyle].photos.length - 1 ? 'hidden' : 'visible'};
    `;

  const LeftArrowButton = styled.button`
    ${overviewButtonStyle}
    left: 0;
    position: absolute;
    visibility: ${activeImage === 0 ? 'hidden' : 'visible'};
    `;

  const UpArrowButton = styled.button`
    ${overviewButtonStyle};
    visibility: ${atTop ? 'hidden' : 'visible'};
    `;

  const DownArrowButton = styled.button`
    ${overviewButtonStyle};
    `;

  const BigPictureDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: ${isExpanded ? '100%' : '70%'};
    height: 100%;
    position: relative;
    flex-basis: 100%;
    `;

  function scrollDown(offset) {
    imageGalleryRef.current.scrollTop += offset;
    if (offset > 0) {
      setAtTop(false);
    }
    if (offset < 0) {
      if (imageGalleryRef.current.scrollTop + offset <= 0) {
        setAtTop(true);
      }
    }
  }

  function toggleZoomView() {
    setIsZoomed(!isZoomed);
    console.log(isZoomed)
  }

  let index = -1;
  return (
    <div style={{ display: 'flex', height: '100%', 'flex-basis': '100%', 'background-color': 'whitesmoke' }}>
      <div style={{ height: '70%', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
        <UpArrowButton onClick={() => scrollDown(-50)}>⇧</UpArrowButton>
        <div style={imageGalleryDivStyle} ref={imageGalleryRef}>
          {styles && styles[activeStyle].photos.map((photo) => {
            index++
            if (index === activeImage) {
              return (
                <img style={activeImageStyle} onClick={selectBigPicture} name={index} src={photo.url === null ? placeHolderImage : photo.url} alt="style-img" />
              );
            }
            return (
              <img style={imageGalleryStyle} onClick={selectBigPicture} name={index} src={photo.url === null ? placeHolderImage : photo.url} alt="style-img" />
            );
          })}
        </div>
        <DownArrowButton onClick={() => scrollDown(50)}>⇩</DownArrowButton>
      </div>
      <BigPictureDiv>
        <LeftArrowButton type="button" id="decrement" onClick={changeBigPicture}>⇦</LeftArrowButton>
        <img style={bigImageStyle} src={styles && (styles[activeStyle].photos[activeImage].url === null ? placeHolderImage : styles[activeStyle].photos[activeImage].url)} onClick={isExpanded ? toggleZoomView : toggleExpandedView} alt="enlarged-style" />
        <ExpandButton onClick={toggleExpandedView}>✕</ExpandButton>
        <RightArrowButton type="button" id="increment" onClick={changeBigPicture}>⇨</RightArrowButton>
      </BigPictureDiv>
    </div>
  );
}

export default forwardRef(ImageGallery);
