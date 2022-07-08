import React from "react";
import ImageGallery from './ImageGallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelector from './StyleSelector.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';

function Overview() {
  return (
    <>
      <h2>Overview Widget</h2>
      <ImageGallery />
      <ProductDetails />
      <StyleSelector />
      <PurchaseOptions />
    </>
  );
}

export default Overview;
