/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function StarBreakDown({ star, setStar, ratings }) {
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
  return (
    <div className="star-breakdown">
      <span onClick={onStarClick}>5 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>4 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>3 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>2 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      <span onClick={onStarClick}>1 stars</span><span> - this will be a two-toned bar representing 145/333 ratings</span><br />
      {star.length === 5 ? <span onClick={resetFilters}>All Filters Selected - Reset Filters</span> : null}
    </div>
  );
}

export default StarBreakDown;
