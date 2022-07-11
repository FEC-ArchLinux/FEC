/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import GH_TOKEN from '../../../../token.js';

function RatingsAndReviews({ productId }) {
  return (
    <div>
      <h3> Ratings and Reviews</h3>
      <RatingBreakdown productId={productId} />
      <ReviewList productId={productId} />
    </div>
  );
}

export default RatingsAndReviews;
