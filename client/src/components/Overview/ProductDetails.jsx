import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import GH_TOKEN from '../../../../token.js';

function ProductDetails({ productInfo, styles, activeStyle, productId }) {
  const [reviewData, setReviewData] = useState();
  const [starRating, setStarRating] = useState();
  const [totalReviews, setTotalReviews] = useState(0);

  function getProductReviewData() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productId}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    })
      .then((data) => setReviewData(data.data))
      .catch((err) => console.error(err));
  }

  function avgStarRating() {
    let totalReviewsVar = 0;
    let totalStarCount = 0;
    const ratings = Object.keys(reviewData.ratings);
    for (let number of ratings) {
      totalReviewsVar += parseInt(reviewData.ratings[number]);
      totalStarCount += parseInt(number) * parseInt(reviewData.ratings[number]);
    }
    setTotalReviews(totalReviewsVar);
    return totalStarCount / totalReviewsVar;
  }

  useEffect(() => {
    getProductReviewData();
  }, [productId]);

  useEffect(() => {
    if (reviewData) {
      setStarRating(avgStarRating());
    }
  }, [reviewData]);

  function priceGenerator() {
    if (styles[activeStyle].sale_price) {
      return (
        <>
          <p style={{ margin: 0 }}>$<s>{styles[activeStyle].original_price}</s></p>
          <p style={{ margin: 0, color: 'red' }}>${styles[activeStyle].sale_price}</p>
        </>
      );
    }
    return <p style={{ margin: 0 }}>${styles[activeStyle].original_price}</p>;
  }

  const ReviewP = styled.p`
    margin: 0;
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
      <StarRatings isSelectable="false" starRatedColor="black" numberOfStars={5} starSpacing="2px" starDimension="calc(.3vw + .3vh + 7px)" rating={starRating ? Math.round(starRating * 100) / 100 : 0} />
      <ReviewP onClick={() => document.getElementById("review-section").scrollIntoView({ behavior: 'smooth' })}>See all {starRating && totalReviews} reviews.</ReviewP>
      <p style={{ 'margin-bottom': 0 }}>{productInfo.category}</p>
      <h2 style={{ 'margin-top': 0, 'margin-bottom': '2px' }}>{productInfo.name}</h2>
      <div style={{ height: "calc(2vh + 1vw)" }}>
        {productInfo && styles && priceGenerator()}
      </div>
    </div>
  );
}

export default ProductDetails;
