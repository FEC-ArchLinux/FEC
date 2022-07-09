import React, { useState, useEffect } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';
import ImageGallery from './ImageGallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelector from './StyleSelector.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';
import ProductDescription from './ProductDescription.jsx';

function Overview({ productId }) {
  const [productInfo, setProductInfo] = useState([]);
  const [productStyleInfo, setProductStyleInfo] = useState([]);

  function getProductInfo() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    })
      .then((info) => setProductInfo(info.data))
      .catch((err) => console.error(err));
  }

  function getProductStyleInfo() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`, {
      headers: {
        authorization: GH_TOKEN,
      },
    })
      .then((info) => setProductStyleInfo(info.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getProductInfo();
    getProductStyleInfo();
  }, []);

  return (
    <>
      <h2>Overview Widget</h2>
      <ImageGallery styles={productStyleInfo.results} />
      <ProductDetails productInfo={productInfo} />
      <StyleSelector styles={productStyleInfo.results} />
      <PurchaseOptions />
      <ProductDescription />
    </>
  );
}

export default Overview;
