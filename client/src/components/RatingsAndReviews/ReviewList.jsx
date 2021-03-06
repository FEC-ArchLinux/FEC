/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import GH_TOKEN from '../../../../token.js';
import SingleReviewTile from './SingleReviewTile.jsx';
import SortRelevance from './SortRelevance.jsx';
import StarFilter from "./StarFilter.jsx";
import AddReview from "./AddReview.jsx";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Button = styled.button`
  font-size: calc(2vh + 1pt);
  border: 1px solid;
  height: 40px;
  margin-right: 8px;
  background-color: white;
  :hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

function ReviewList({ metaTransfer, starFilter, productId }) {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [reviewCopy, setReviewCopy] = useState([]);
  const [currentTwo, setCurrentTwo] = useState([]);
  let [filterStopper, setFilterStopper] = useState([]);
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
        setReviewInfo(response.data.results);
        setCurrentTwo(response.data.results.slice(0, 2));
        setReviewCopy(response.data.results);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getReviewInfo();
  }, [productId, newReview]);

  function incrementReviews() {
    setPageNumber(pageNumber += 2);
    setCurrentTwo(currentTwo.concat(reviewInfo.slice(pageNumber, pageNumber + 2)));
  }

  if (starFilter) {
    if (starFilter.length !== filterStopper.length) {
      let filteredStars = StarFilter(reviewCopy, starFilter);
      setReviewInfo(filteredStars);
      setCurrentTwo(filteredStars.slice(0, 2));
      setPageNumber(0);
      setFilterStopper(starFilter.concat([]));
    }
  }

  function addReviewHandler() {
    setNewReview(true);
  }

  if (newReview) {
    return (
      <Overlay>
        <AddReview productId={productId} setNewReview={setNewReview} metaTransfer={metaTransfer} />
      </Overlay>
    );
  }
  if (reviewInfo) {
    return (
      <div className="review-container" style={{ width: "775px", overflowY: 'auto', height: "550px" }}>
        <SortRelevance reviewCopy={reviewCopy} setCurrentTwo={setCurrentTwo} setPageNumber={setPageNumber} setReviewInfo={setReviewInfo} reviewInfo={reviewInfo} />
        {currentTwo.map((review, index) => <SingleReviewTile review={review} key={review.review_id} />)}
        {pageNumber >= reviewInfo.length ? null : <Button style={{ marginTop: "5px", position: 'sticky', bottom: '0', zIndex: '5' }} onClick={incrementReviews} type="button">MORE REVIEWS</Button>}
        <Button style={{ marginTop: "5px", position: 'sticky', bottom: '0', zIndex: '5' }} onClick={addReviewHandler} type="button">ADD A REVIEW <small>???</small></Button>
      </div>
    );
  }
}

export default ReviewList;
