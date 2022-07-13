/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";

function ProductBreakdown({ breakdown }) {
  if (breakdown) {
    return (
      <div className="product-breakdown">
        {breakdown.Comfort ? <><span>Comfort - {breakdown.Comfort.value}</span><br /></> : null}
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
