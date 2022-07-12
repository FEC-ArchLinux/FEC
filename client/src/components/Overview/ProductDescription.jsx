import React from 'react';

function ProductDescription({ productInfo }) {
  return (
    <>
      <h3>Product Description</h3>
      <h4>{productInfo.slogan}</h4>
      <p>{productInfo.description}</p>
      <h4>Features</h4>
      <ul>
        {productInfo.features && productInfo.features.map((feature) => <li>{feature.feature}: {feature.value}</li>)}
      </ul>
    </>
  );
}

export default ProductDescription;
