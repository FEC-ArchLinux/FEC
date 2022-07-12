/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import StarRatings from 'react-star-ratings';

function AddReview({ metaTransfer }) {
  let [starRating, setStarRating] = useState(0);
  let [recommend, setRecommend] = useState(true);

  function starRater(numberStars) {
    if (numberStars === 1) {
      return <p>1 star - Poor </p>;
    } else if (numberStars === 2) {
      return <p>2 star - Fair </p>;
    } else if (numberStars === 3) {
      return <p>3 star - Average </p>;
    } else if (numberStars === 4) {
      return <p>4 star - Good </p>;
    } else if (numberStars === 5) {
      return <p>5 star - Great </p>;
    }
    return null;
  }
  function recommendSetter(event) {
    setRecommend(event.target.value === "True" ? true : false);
  }

  return (
    <form>
      <h3>Write Your Review</h3>
      <p>About ** product name goes here ** </p>
      <p>Overall Product Rating :</p>
      <StarRatings rating={starRating} starRatedColor="blue" changeRating={setStarRating} numberOfStars={5} name="rating" starDimension="20px" />{starRater(starRating)}
      <div onChange={recommendSetter} className="radio-btn">
        <p>Do you recommend this product?</p>
        <input type="radio" value="True" name="recommend" /> Yes
        <input type="radio" value="False" name="recommend" /> No
      </div>
      <button type="button">Submit Review</button>
    </form>
  );
}

export default AddReview;
