import React, { useState, forwardRef, useImperativeHandle } from 'react';

function ImageGallery({ styles, activeStyle }, ref) {
  const [activeImage, setActiveImage] = useState(0);

  // pass up to overview function that resets the big image to the first after changing styles
  useImperativeHandle(ref, () => ({
    selectBigPicture: (index) => {
      setActiveImage(parseInt(index));
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

  let index = -1;
  return (
    <>
      <h3>Selected Photo</h3>
      <button type="button" id="decrement" onClick={changeBigPicture}>⬅️</button>
      <img width="30%" src={styles && styles[activeStyle].photos[activeImage].url} alt="enlarged-style" />
      <button type="button" id="increment" onClick={changeBigPicture}>➡️</button>
      <h3>Image Gallery</h3>
      {styles && styles[activeStyle].photos.map((photo) => {
        index++
        return <img onClick={selectBigPicture} width="100px" name={index} src={photo.url} alt="style-img" />;
      })}
    </>
  );
}

export default forwardRef(ImageGallery);
