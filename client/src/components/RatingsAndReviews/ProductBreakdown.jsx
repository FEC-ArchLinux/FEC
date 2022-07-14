/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

let Rectangle = styled.div`
  background-color: rgb(208,208,208);
  width:73px;
  height:8px;
  border:1px;
  display: inline-block;
  margin-right: 2px;
  position: 'relative';
`;

let Marker = styled.span`
  overflow: visible;
  position: absolute;
  z-index: 1000;
  margin-top: -7px;
`;

let Header = styled.span`
  font-size: 13px
`;
let LeftFooter = styled.span`
  margin-top: -5px;
  position: absolute;
  font-size: 11px
`;
let RightFooter = styled.span`
  margin-top: -5px;
  margin-left: 178px;
  position: absolute;
  font-size: 11px
`;

function ProductBreakdown({ breakdown }) {
  function pixelMarginDeterminer() {
    let pixelMargins = {};
    for (let char in breakdown) {
      let current = Number(breakdown[char].value);
      let value = (current * 220) / 5;
      pixelMargins[char] = value.toFixed().toString();
    }
    return pixelMargins;
  }

  if (breakdown) {
    let characteristics = pixelMarginDeterminer();
    return (
      <div className="product-breakdown">
        {breakdown.Comfort ? <><Header>Comfort</Header><br /> <Marker style={{ marginLeft: `${characteristics.Comfort}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /><br /><LeftFooter>Too Small</LeftFooter><RightFooter>Too Large</RightFooter><br /></> : null}
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
