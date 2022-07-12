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

  let index = -1;
  return (
    <div style={{ width: "400px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3>Image Gallery</h3>
      <div style={{marginRight: "10px"}}>
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
      <h3>Selected Photo</h3>
      <button type="button" id="decrement" onClick={changeBigPicture}>⬅️</button>
      <img style={{ marginRight: "10px", marginLeft: "10px" }} height="500px" src={styles && styles[activeStyle].photos[activeImage].url} alt="enlarged-style" />
      <button type="button" id="increment" onClick={changeBigPicture}>➡️</button>
    </div>
  );
}

export default forwardRef(ImageGallery);
