/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function ProductBreakdown({ breakdown }) {
  if (breakdown) {
    return (
      <div className="product-breakdown">
        {breakdown.Comfort ? <span>Comfort - {breakdown.Comfort.value}</span> : null}<br />
        {breakdown.Fit ? <span>Fit - {breakdown.Fit.value}</span> : null}<br />
        {breakdown.Length ? <span>Length - {breakdown.Length.value}</span> : null}<br />
        {breakdown.Quality ? <span>Quality - {breakdown.Quality.value}</span> : null}<br />
      </div>
    );
  }
}

export default ProductBreakdown;
