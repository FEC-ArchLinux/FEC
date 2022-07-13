import React, { useState, forwardRef, useImperativeHandle } from 'react';

function ImageGallery({ styles, activeStyle }, ref) {
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
    height: '80px',
    width: '80px',
    border: 'thin solid black',
  };

  const activeImageStyle = {
    'object-fit': 'cover',
    height: '80px',
    width: '80px',
    border: 'thick solid black',
  };

  const bigImageStyle = {
    'max-height': '100%',
    'max-width': '100%',
  };

  const bigPictureDivStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-basis': '70%',
    height: '100%',
  };

  const bigPictureinnerDivStyle = {
    display: 'flex',
    'justify-content': 'center',
    'background-color': 'whitesmoke',
    'flex-basis': '100%',
    height: '100%',
    'align-items': 'center',
  };

  let index = -1;
  return (
    <>
      <div>
        {styles && styles[activeStyle].photos.map((photo) => {
          index++
          if (index === activeImage) {
            return (
              <>
                <img style={activeImageStyle} onClick={selectBigPicture} name={index} src={photo.url} alt="style-img" />
                <br />
              </>
            );
          }
          return (
            <>
              <img style={imageGalleryStyle} onClick={selectBigPicture} name={index} src={photo.url} alt="style-img" />
              <br />
            </>
          );
        })}
      </div>
      <div style={bigPictureDivStyle}>
        <button type="button" id="decrement" onClick={changeBigPicture}>⬅️</button>
        <div style={bigPictureinnerDivStyle}>
          <img style={bigImageStyle} src={styles && styles[activeStyle].photos[activeImage].url} alt="enlarged-style" />
        </div>
        <button type="button" id="increment" onClick={changeBigPicture}>➡️</button>
      </div>
    </>
  );
}

export default forwardRef(ImageGallery);
