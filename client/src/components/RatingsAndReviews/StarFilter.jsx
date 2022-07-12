/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function StarFilter(reviewInfo, starFilter) {
  let newArray = [];
  for (let review of reviewInfo) {
    if (starFilter.includes(review.rating.toString())) {
      newArray.push(review);
    }
  }
  return newArray;
}

export default StarFilter;
