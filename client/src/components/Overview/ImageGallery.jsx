import React, { useState, forwardRef, useImperativeHandle } from 'react';

function ImageGallery({ styles, activeStyle }, ref) {
  const [activeImage, setActiveImage] = useState(0);

  //pass up function that resets the big image to the first after changing styles
  useImperativeHandle(ref, () => ({
    selectBigPicture: (index) => {
      setActiveImage(index);
    },
  }));

  function selectBigPicture(e) {
    setActiveImage(e.target.name);
  }

  if (styles) {
    let index = -1;
    return (
      <>
        <h3>Selected Photo</h3>
        <img width="200px" src={styles[activeStyle].photos[activeImage].url} alt="enlarged-style" />
        <h3>Image Gallery</h3>
        {styles[activeStyle].photos.map((photo) => {
          index++
          return <img onClick={selectBigPicture} width="100px" name={index} src={photo.url} alt="style-img" />;
        })}
      </>
    );
  }
  return <p>Loading Image Gallery...</p>;
}

export default forwardRef(ImageGallery);
