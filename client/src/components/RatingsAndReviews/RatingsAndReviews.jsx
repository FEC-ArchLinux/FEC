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

let MainFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

let MainHeader = styled.h3`
  margin-left: 22%;
`;

let TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

let StyledRatingBreakdown = styled(RatingBreakdown)`
`;

function RatingsAndReviews({ productId }) {
  let [star, setStar] = useState([]);
  let [metaTransfer, setMetaTransfer] = useState([]);
  return (
    <TopContainer>
      <MainHeader> Ratings and Reviews </MainHeader>
      <MainFlex>
        <StyledRatingBreakdown setMetaTransfer={setMetaTransfer} setStar={setStar} star={star} productId={productId} />
        <ReviewList metaTransfer={metaTransfer} starFilter={star} productId={productId} />
      </MainFlex>
    </TopContainer>
  );
}

export default RatingsAndReviews;
