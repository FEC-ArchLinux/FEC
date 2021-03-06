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
  width:82px;
  height:8px;
  border:1px;
  display: inline-flex;
  margin-right: 2px;
  position: 'relative';
`;

let Marker = styled.span`
  overflow: visible;
  position: absolute;
  z-index: 2;
  margin-top: -12px;
`;

let Header = styled.span`
  font-size: 14px;
  color: rgb(105,105,105);
  margin-bottom: 4px;
  display: inline-block;
`;
let LeftFooter = styled.span`
  margin-top: -15px;
  position: absolute;
  font-size: 11px;
  color: rgb(105,105,105);
`;
let RightFooter = styled.span`
  margin-top: -15px;
  margin-left: 201px;
  position: absolute;
  font-size: 11px;
  color: rgb(105,105,105);
`;
let QualitySpan = styled.span`
  margin-top: -15px;
  margin-left: 222px;
  position: absolute;
  font-size: 11px;
  color: rgb(105,105,105);
`;
let FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

function ProductBreakdown({ breakdown }) {
  function pixelMarginDeterminer() {
    let pixelMargins = {};
    for (let char in breakdown) {
      let current = Number(breakdown[char].value);
      let value = (current * 238) / 5;
      pixelMargins[char] = value.toFixed().toString();
    }
    return pixelMargins;
  }

  if (breakdown) {
    let characteristics = pixelMarginDeterminer();
    return (
      <div data-testid="product-breakdown">
        {breakdown.Comfort ? <><Header>Comfort</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Comfort}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Poor</LeftFooter><QualitySpan>Great</QualitySpan><br /></> : null}
        {breakdown.Fit ? <><Header>Fit</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Fit}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Too Small</LeftFooter><RightFooter>Too Large</RightFooter><br /></> : null}
        {breakdown.Length ? <><Header>Length</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Length}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Too Small</LeftFooter><RightFooter>Too Large</RightFooter><br /></> : null}
        {breakdown.Quality ? <><Header>Quality</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Quality}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Poor</LeftFooter><QualitySpan>Great</QualitySpan><br /></> : null}
        {breakdown.Size ? <><Header>Size</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Size}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Too Small</LeftFooter><RightFooter>Too Large</RightFooter><br /></> : null}
        {breakdown.Width ? <><Header>Width</Header><br /> <FlexContainer><Marker data-testid="marker" style={{ marginLeft: `${characteristics.Width}px` }}>🔻</Marker><Rectangle /><Rectangle /><Rectangle /></FlexContainer><br /><LeftFooter>Too Small</LeftFooter><RightFooter>Too Large</RightFooter><br /></> : null}
      </div>
    );
  }
}

export default ProductBreakdown;
