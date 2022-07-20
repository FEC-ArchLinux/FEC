import React from "react";

function ProductDescription({ productInfo }) {
  const productDescriptionStyle = {
    display: "flex",
    margin: "20px 0px",
    "justify-content": "flex-start",
    gap: "5%",
  };

  return (
    <div style={productDescriptionStyle}>
      <div style={{ "flex-basis": "50%", "margin-left": "5vw" }}>
        <h3>{productInfo.slogan}</h3>
        <p>{productInfo.description}</p>
      </div>
      <ul
        style={{
          "border-left": "2px solid",
          "padding-left": "15px",
          "list-style-type": "none",
        }}
      >
        {productInfo.features &&
          productInfo.features.map((feature) => (
            <li>
              ✓ {feature.feature}: {feature.value}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductDescription;
