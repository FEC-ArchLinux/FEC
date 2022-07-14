import React from 'react';

function ProductDescription({ productInfo }) {
  const productDescriptionStyle = {
    display: 'flex',
    margin: '20px 0px',
    'justify-content': 'flex-start',
    gap: '5%',
  };

  return (
    <div style={productDescriptionStyle}>
      <div style={{ 'flex-basis': '50%', 'margin-left': '5vw' }}>
        <h3>{productInfo.slogan}</h3>
        <p>{productInfo.description}</p>
      </div>
      <div style={{'border-left': '2px solid' , 'padding-left': '15px'}}>
        <h4>Features</h4>
        <ul>
          {productInfo.features && productInfo.features.map((feature) => <li>{feature.feature}: {feature.value}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
