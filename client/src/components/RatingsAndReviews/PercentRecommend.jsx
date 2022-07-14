/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import styled from 'styled-components';

let StyledPercent = styled.span`
  color: rgb(128,128,128);
  font-size: 14px;
  margin-top: 10px;
`;

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
      <StyledPercent>{recommend ? determineTotalPercentage(recommend) : null}% of reviews recommend this product</StyledPercent>
    </div>
  );
}

export default PercentRecommend;
