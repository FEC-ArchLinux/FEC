/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function AverageStar({ ratings }) {
  function getAverageStars(ratingObj) {
    let totalReviews = 0;
    let totalObjEntries = Object.values(ratingObj);
    let indexStar = 1;
    let totalStarCount = 0;
    for (let num of totalObjEntries) {
      totalReviews += Number(num);
      totalStarCount += Number(num) * indexStar;
      indexStar += 1;
    }

    let average = totalStarCount / totalReviews;
    return average.toFixed(2);
  }

  return (
    <div className="ratings-stars">
      <span>{ratings ? getAverageStars(ratings) : null}</span>
      <span> Star Field For Number</span>
    </div>
  );
}

export default AverageStar;
