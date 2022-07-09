/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';


function ReviewList({ productId }) {
  const [reviewInfo, setReviewInfo] = useState([]);

  function getReviewInfo() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?page=1&count=2&sort="relevant"&product_id=${productId}`,
      headers: {
        Authorization: GH_TOKEN,
      },
    };
    axios(config)
      .then((response) => setReviewInfo(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getReviewInfo();
  }, []);

  return (
    <div>
      <span>{}</span>
    </div>
  );
}

export default ReviewList;

// reviewInfo.length > 0 ? reviewInfo.results[0].body : null
