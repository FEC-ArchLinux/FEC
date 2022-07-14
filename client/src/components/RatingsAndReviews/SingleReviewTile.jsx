/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const ReviewContainer = styled.div`
  width: 588px;
  border-bottom: 2px solid rgb(105 105 105 / 44%);
  margin-top: 25px;
  padding-bottom: 10px;
`;
function SingleReviewTile({ review }) {
  return (
    <ReviewContainer>
      <StarRatings isSelectable="false" starRatedColor="black" numberOfStars={5} starSpacing="2px" starDimension="10px" rating={review.rating} />
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", marginLeft: "5px", float: "right" }}>{review.date}</span>
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", float: "right" }}>{`${review.reviewer_name}, `}</span><br />
      <span><b>{review.summary}</b></span><br />
      <span>{review.body}</span><br />
      <span>{review.recommend}</span><br />
      <span>{review.response}</span><br />
      <span>Helpful? Yes ({review.helpfulness}) || No</span>
    </ReviewContainer>
  );
}

export default SingleReviewTile;
