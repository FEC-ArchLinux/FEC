/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function StarBreaDown({ star, setStar, ratings }) {
  function onStarClick(event) {
    const newStar = event.target.innerHTML.slice(0, 1);
    if (!star.includes(newStar)) {
      setStar(star.concat([newStar]));
    }
  }
  return (
    <div className="star-breakdown">
      <span onClick={onStarClick}>5 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>4 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>3 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>2 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>1 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
    </div>
  );
}

export default StarBreaDown;
