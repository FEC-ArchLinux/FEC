/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

let StyleNumber = styled.span`
  font-size: 47px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

function AverageStar({ ratings }) {
  let [starNumber, setStarNumber] = useState(0);

  function getAverageStars(ratingObj) {
    let totalReviews = 0;
    let totalObjEntries = Object.keys(ratingObj);
    let totalStarCount = 0;
    for (let num of totalObjEntries) {
      totalReviews += Number(ratingObj[num]);
      totalStarCount += Number(num) * ratingObj[num];
    }

    let average = totalStarCount / totalReviews;
    return average.toFixed(1);
  }
  useEffect(() => {
    if (ratings) {
      let temp = getAverageStars(ratings);
      setStarNumber(Number(temp));
    }
  }, [ratings]);

  if (ratings) {
    return (
      <div className="ratings-stars">
        <StyleNumber><b>{ratings ? getAverageStars(ratings) : null}</b></StyleNumber>
        <StarRatings isSelectable="false" starRatedColor="black" numberOfStars={5} starSpacing="2px" starDimension="10px" rating={ratings ? starNumber : 1} />
      </div>
    );
  }
}

export default AverageStar;
