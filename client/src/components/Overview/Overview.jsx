import React, { useState, useEffect, useRef } from "react";
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
  const [activeStyle, setActiveStyle] = useState(0);

  const imageGalleryRef = useRef();

  // changes actively shown style
  function changeActiveStyle(e) {
    setActiveStyle(parseInt(e.target.id));
    // when new style is selected, change active big image to first in array
    imageGalleryRef.current.selectBigPicture(0);
  }

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
      <ImageGallery ref={imageGalleryRef} styles={productStyleInfo.results} activeStyle={activeStyle} />
      <ProductDetails productInfo={productInfo} styles={productStyleInfo.results} activeStyle={activeStyle} />
      <StyleSelector styles={productStyleInfo.results} changeActiveStyle={changeActiveStyle} activeStyle={activeStyle} />
      <PurchaseOptions styles={productStyleInfo.results} activeStyle={activeStyle} />
      <ProductDescription productInfo={productInfo} />
    </>
  );
}

export default Overview;
