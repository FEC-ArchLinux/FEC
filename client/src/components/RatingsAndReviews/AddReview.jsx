/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const Modal = styled.div`
  text-align: center;
  background: white;
  border: 1px solid #ccc;
  position: fixed;
  z-index: 20;
  background: #fff;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

function AddReview({ setNewReview, metaTransfer }) {
  let [starRating, setStarRating] = useState(0);
  let [recommend, setRecommend] = useState(true);
  let [summary, setSummary] = useState('');
  let [body, setBody] = useState('');

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
    <Modal>
      <form>
        <h3>Write Your Review</h3>
        <p>About ** product name goes here ** </p>
        <p><b>Overall Product Rating :</b></p>
        <StarRatings rating={starRating} starRatedColor="blue" changeRating={setStarRating} numberOfStars={5} name="rating" starDimension="20px" />{starRater(starRating)}
        <div onChange={recommendSetter} className="radio-btn">
          <p><b>Do you recommend this product?</b></p>
          <input type="radio" value="True" name="recommend" /> Yes
          <input type="radio" value="False" name="recommend" /> No
        </div>
        <label htmlFor="summary"><b>Summary: </b></label>
        <input onChange={(event) => setSummary(event.target.value)} size="60" maxLength="60" name="summary" placeholder="Example: Best Purchase Ever" /><br />
        <label htmlFor="body"><b>Review: </b></label>
        <textarea rows="4" cols="70" onChange={(event) => setBody(event.target.value)} size="100" maxLength="1000" name="body" placeholder="“Why did you like the product or not?”" />
        <aside>Minimum required characters left: { body.length < 50 ? 50 - body.length : 'Minimum Reached'}</aside>
        <button type="button">Submit Review</button>
        <button onClick={(event) => setNewReview(false)} type="button">Exit</button>
      </form>
    </Modal>
  );
}

export default AddReview;
