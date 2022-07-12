/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import GH_TOKEN from '../../../../token.js';

function RatingsAndReviews({ productId }) {
  let [star, setStar] = useState([]);
  let [metaTransfer, setMetaTransfer] = useState([]);
  return (
    <div>
      <h3> Ratings and Reviews</h3>
      <RatingBreakdown setMetaTransfer={setMetaTransfer} setStar={setStar} star={star} productId={productId} />
      <ReviewList metaTransfer={metaTransfer} starFilter={star} productId={productId} />
    </div>
  );
}

export default RatingsAndReviews;
