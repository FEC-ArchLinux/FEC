import React from 'react';

function ProductDescription({ productInfo }) {
  return (
    <>
      <h3>Product Description</h3>
      <p>{productInfo.description}</p>
    </>
  );
}

export default ProductDescription;
