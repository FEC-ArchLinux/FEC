/* eslint-disable react/prop-types */
import React from "react";

function SingleReviewTile({ review }) {
  return (
    <div className="review-tile">
      <span>{review.rating}</span>
      <span>{review.date}</span>
      <span>{review.reviewer_name}</span>
      <span><b>{review.summary}</b></span>
      <span>{review.body}</span>
      <span>{review.recommend}</span>
      <span>{review.response}</span>
      <span>Rating Helpfulness Yes || No</span>
    </div>
  );
}

export default SingleReviewTile;
