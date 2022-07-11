import React from 'react';

function ProductDetails({ productInfo, styles, activeStyle }) {
  if (productInfo && styles) {
    let price = <p>Price: ${styles[activeStyle].original_price}</p>;
    let onSale = false;
    if (styles[activeStyle].sale_price) {
      onSale = true;
      price = <p>Original Price: $<s>{styles[activeStyle].original_price}</s></p>;
    }
    return (
      <>
        <h3>Product Details</h3>
        <h4>{productInfo.name}</h4>
        <p>{productInfo.slogan}</p>
        {price}
        {onSale && <p>Sale Price: ${styles[activeStyle].sale_price}</p>}
      </>
    );
  }
  return <p>Loading Product Details...</p>;
}

export default ProductDetails;
