/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';
import SingleReviewTile from './SingleReviewTile.jsx';

function ReviewList({ productId }) {
  const [reviewInfo, setReviewInfo] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);

  function getReviewInfo() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?page=${pageNumber}&count=2&sort="relevant"&product_id=${productId}`,
      headers: {
        Authorization: GH_TOKEN,
      },
    };
    axios(config)
      .then((response) => setReviewInfo([...reviewInfo].concat(response.data.results)))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getReviewInfo();
  }, []);

  function incrementPage() {
    setPageNumber(pageNumber += 1);
    getReviewInfo();
  }

  if (reviewInfo) {
    return (
      <div>
        {reviewInfo.map((review, index) => <SingleReviewTile review={review} key={index} />)}
        <button onClick={incrementPage} type="button"> More Reviews </button>
      </div>
    );
  }
}

export default ReviewList;

// reviewInfo.length > 0 ? reviewInfo.results[0].body : null
