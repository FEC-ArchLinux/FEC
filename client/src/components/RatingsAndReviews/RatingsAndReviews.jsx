/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ReviewList from "./ReviewList.jsx";
import GH_TOKEN from '../../../../token.js';

const axios = require('axios');

function RatingsAndReviews({ productId }) {
  const [productStyleInfo, setProductStyleInfo] = useState([]);

  function getMetaData() {

  }

  useEffect(() => {
    getMetaData();
  }, []);

  return (
    <div>
      <h3> Ratings and Reviews</h3>
      <ReviewList productId={productId} />
    </div>
  );
}

export default RatingsAndReviews;
