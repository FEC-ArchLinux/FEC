import React, { useState } from 'react';

function ImageGallery({ styles }) {
  if (!!styles) {
    return (
      <>
        <h4>Image Gallery</h4>
        <img src={styles[0].photos[0].thumbnail_url} alt="style" />
      </>
    );
  }
  return <span>Loading...</span>;
}

export default ImageGallery;
