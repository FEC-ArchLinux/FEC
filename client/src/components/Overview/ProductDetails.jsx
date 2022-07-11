import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';

function ProductDetails({ productInfo, styles, activeStyle, productId }) {
  const [reviewData, setReviewData] = useState();

  function getProductReviewData() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productId}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    })
      .then((data) => setReviewData(data.data))
      .catch((err) => console.error(err));
  }

  let totalReviews = 0;
  function avgStarRating() {
    let totalStarCount = 0;
    const ratings = Object.keys(reviewData.ratings);
    for (let number of ratings) {
      totalReviews += parseInt(reviewData.ratings[number]);
      totalStarCount += parseInt(number) * parseInt(reviewData.ratings[number]);
    }
    return totalStarCount / totalReviews;
  }

  useEffect(() => {
    getProductReviewData();
  }, []);

  function priceGenerator() {
    if (styles[activeStyle].sale_price) {
      return (
        <>
          <p>Original Price: $<s>{styles[activeStyle].original_price}</s></p>
          <p>Sale Price: ${styles[activeStyle].sale_price}</p>
        </>
      );
    }
    return <p>Price: ${styles[activeStyle].original_price}</p>;
  }
  return (
    <>
      <h3>Product Details</h3>
      <p>{productInfo && styles && reviewData && Math.round(avgStarRating() * 100) / 100} stars based on {totalReviews} reviews.</p>
      <p>{productInfo.category}</p>
      <h4>{productInfo.name}</h4>
      {productInfo && styles && priceGenerator()}
    </>
  );
}

export default ProductDetails;
