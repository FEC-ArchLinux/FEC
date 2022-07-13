/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

let StarParent = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

let StyledSpan = styled.span`
  margin-right: 3px;
  color: rgb(128,128,128);
  margin-bottom: 10px;
`;

let StyledMeter = styled.meter`
  width: 150px;
  height: 17px;
`;

function StarBreakDown({ star, setStar, ratings }) {
  let [totalRatings, setTotalRatings] = useState(0);

  function onStarClick(event) {
    const newStar = event.target.innerHTML.slice(0, 1);
    if (!star.includes(newStar)) {
      setStar(star.concat([newStar]));
    }
    if (star.includes(newStar)) {
      let index = star.indexOf(newStar);
      star.splice(index, 1);
      setStar(star.concat([]));
    }
  }
  function resetFilters() {
    setStar([]);
  }

  function totalRatingsCounter() {
    let ratingArray = Object.values(ratings);
    let total = 0;
    for (let num of ratingArray) {
      total += Number(num);
    }
    setTotalRatings(total);
  }

  useEffect(() => {
    if (ratings) {
      totalRatingsCounter();
    }
  }, [ratings]);

  if (ratings) {
    return (
      <StarParent>
        <StyledSpan onClick={onStarClick}><u>5 stars</u></StyledSpan><StyledMeter value={ratings['5']} min="0" max={totalRatings.toString()}>stars</StyledMeter><br />
        <StyledSpan onClick={onStarClick}><u>4 stars</u></StyledSpan><StyledMeter value={ratings['4']} min="0" max={totalRatings.toString()}>stars</StyledMeter><br />
        <StyledSpan onClick={onStarClick}><u>3 stars</u></StyledSpan><StyledMeter value={ratings['3']} min="0" max={totalRatings.toString()}>stars</StyledMeter><br />
        <StyledSpan onClick={onStarClick}><u>2 stars</u></StyledSpan><StyledMeter value={ratings['2']} min="0" max={totalRatings.toString()}>stars</StyledMeter><br />
        <StyledSpan onClick={onStarClick}><u>1 stars</u></StyledSpan><StyledMeter value={ratings['1']} min="0" max={totalRatings.toString()}>stars</StyledMeter><br />
        {star.length === 5 ? <span onClick={resetFilters}>All Filters Selected - Reset Filters</span> : null}
      </StarParent>
    );
  }
}

export default StarBreakDown;
