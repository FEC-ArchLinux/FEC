/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';
import SingleReviewTile from './SingleReviewTile.jsx';
import SortRelevance from './SortRelevance.jsx';
import StarFilter from "./StarFilter.jsx";
import AddReview from "./AddReview.jsx";

function ReviewList({ starFilter, productId }) {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [reviewCopy, setReviewCopy] = useState([]);
  const [currentTwo, setCurrentTwo] = useState([]);
  const [filterStopper, setFilterStopper] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);
  let [newReview, setNewReview] = useState(false);

  function getReviewInfo() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?page=1&count=500&sort=relevant&product_id=${productId}`,
      headers: {
        Authorization: GH_TOKEN,
      },
    };
    axios(config)
      .then((response) => {
        setReviewInfo([...reviewInfo].concat(response.data.results));
        setCurrentTwo(response.data.results.slice(0, 2));
        setReviewCopy(response.data.results);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getReviewInfo();
  }, []);

  function incrementReviews() {
    setPageNumber(pageNumber += 2);
    setCurrentTwo(currentTwo.concat(reviewInfo.slice(pageNumber, pageNumber + 2)));
  }

  if (starFilter.length > filterStopper.length || starFilter.length < filterStopper.length) {
    let filteredStars = StarFilter(reviewCopy, starFilter);
    setReviewInfo(filteredStars);
    setFilterStopper(starFilter);
    setCurrentTwo(filteredStars.slice(0, 2));
    setPageNumber(0);
  }

  function addReviewHandler() {
    setNewReview(true);
  }

  if (newReview) {
    return (
      <div>
        <AddReview />
      </div>
    );
  }
  if (reviewInfo) {
    return (
      <div>
        <SortRelevance setCurrentTwo={setCurrentTwo} setPageNumber={setPageNumber} setReviewInfo={setReviewInfo} reviewInfo={reviewInfo} />
        {currentTwo.map((review, index) => <SingleReviewTile review={review} key={index} />)}
        {pageNumber >= reviewInfo.length ? null : <button onClick={incrementReviews} type="button"> More Reviews </button>}
        <button onClick={addReviewHandler} type="button">Add a Review</button>
      </div>
    );
  }
}

export default ReviewList;
