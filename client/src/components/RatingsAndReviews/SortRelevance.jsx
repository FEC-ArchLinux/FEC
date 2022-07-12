/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function SortRelevance({ setCurrentTwo, setPageNumber, reviewInfo, setReviewInfo }) {
  function sortByChange(event) {
    const selector = event.target.value;
    if (selector === 'Newest') {
      let sorted = reviewInfo.sort((a, b) => (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0));
      setReviewInfo(sorted);
      setCurrentTwo(reviewInfo.slice(0, 2));
      setPageNumber(0);
    } else if (selector === 'Helpful') {
      let helped = reviewInfo.sort((a, b) => (a.helpfulness > b.helpfulness) ? -1 : ((a.helpfulness < b.helpfulness) ? 1 : 0));
      setReviewInfo(helped);
      setCurrentTwo(reviewInfo.slice(0, 2));
      setPageNumber(0);
    } else if (selector === "Relevant") {
      let relevant = reviewInfo.sort((a, b) => (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0) || (a.helpfulness > b.helpfulness) ? -1 : ((a.helpfulness > b.helpfulness) ? 1 : 0));
      setReviewInfo(relevant);
      setCurrentTwo(reviewInfo.slice(0, 2));
      setPageNumber(0);
    }
  }
  return (
    <div>
      <label htmlFor="sortBy">{reviewInfo.length} reviews, sorted by</label>
      <select onChange={sortByChange} name="sortBy" id="reviewSort">
        <option value="Relevant">Relevant</option>
        <option value="Helpful">Helpful</option>
        <option value="Newest">Newest</option>
      </select>
    </div>
  );
}

export default SortRelevance;
