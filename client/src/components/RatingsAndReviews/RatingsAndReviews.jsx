/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import GH_TOKEN from '../../../../token.js';
import withClickTracker from '../withClickTracker.jsx';

let MainFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

let MainHeader = styled.h3`
  margin-left: auto;
  width: 78vw;
`;

let TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

let StyledRatingBreakdown = styled(RatingBreakdown)`
`;

function RatingsAndReviews({ productId, clickTracker }) {
  let [star, setStar] = useState([]);
  let [metaTransfer, setMetaTransfer] = useState([]);

  return (
    <div onClick={(e) => clickTracker(e, 'Reviews')}>
      <TopContainer id="review-section">
        <MainHeader> Ratings and Reviews </MainHeader>
        <MainFlex>
          <StyledRatingBreakdown setMetaTransfer={setMetaTransfer} setStar={setStar} star={star} productId={productId} />
          <ReviewList metaTransfer={metaTransfer} starFilter={star} productId={productId} />
        </MainFlex>
      </TopContainer>
    </div>
  );
}

export default withClickTracker(RatingsAndReviews);
