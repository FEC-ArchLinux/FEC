import React, { useState } from 'react';

function ImageGallery({ styles }) {
  if (styles) {
    return (
      <>
        <h4>Image Gallery</h4>
        <img width="100px" src={styles[0].photos[0].thumbnail_url} alt="style-img" />
      </>
    );
  }
  return <span>Loading...</span>;
}

export default ImageGallery;
