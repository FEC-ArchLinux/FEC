/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function PercentRecommend({ recommend }) {
  function determineTotalPercentage(recommendObj) {
    let total = 0;
    let recommendations = 0;
    for (let value in recommendObj) {
      total += Number(recommendObj[value]);
      if (value === 'true') {
        recommendations = recommendObj[value];
      }
    }
    let result = (recommendations / total) * 100;
    return result.toFixed();
  }

  return (
    <div className="percent-recommend">
      <span>{recommend ? determineTotalPercentage(recommend) : null}% of reviews recommend this product</span>
    </div>
  );
}

export default PercentRecommend;
