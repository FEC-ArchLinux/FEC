/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import styled from 'styled-components';

let Rectangle = styled.div`
  background-color: rgb(208,208,208);
  width:73px;
  height:8px;
  border:1px;
  display: inline-block;
  margin: 2px;
`;

let Progress = styled.progress`
  width: 230px;
`;

function ProductBreakdown({ breakdown }) {
  if (breakdown) {
    return (
      <div className="product-breakdown">
        {breakdown.Comfort ? <><span>Comfort - {breakdown.Comfort.value}</span><br /></> : null}
        <Progress value={breakdown.Comfort.value} max="5">meh</Progress><br />
        {breakdown.Fit ? <><span>Fit - {breakdown.Fit.value}</span><br /></> : null}
        {breakdown.Length ? <><span>Length - {breakdown.Length.value}</span><br /></> : null}
        {breakdown.Quality ? <><span>Quality - {breakdown.Quality.value}</span><br /></> : null}
        {breakdown.Size ? <><span>Size - {breakdown.Size.value}</span><br /></> : null}
        {breakdown.Width ? <><span>Width - {breakdown.Width.value}</span><br /></> : null}
      </div>
    );
  }
}

export default ProductBreakdown;
