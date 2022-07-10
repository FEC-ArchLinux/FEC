import React, { useState } from 'react';

function ImageGallery({ styles, activeStyle }) {
  if (styles) {
    return (
      <>
        <h3>Image Gallery</h3>
        {styles[activeStyle].photos.map((photo) => <img width="100px" src={photo.thumbnail_url} alt="style-img" />)}
      </>
    );
  }
  return <span>Loading...</span>;
}

export default ImageGallery;
