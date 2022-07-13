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
  const purchaseOptionsRef = useRef();

  // changes actively shown style
  function changeActiveStyle(e) {
    // when new style is selected, change active big image to first in array
    imageGalleryRef.current.selectBigPicture();
    // reset selected size option
    purchaseOptionsRef.current.resetSelectedSize();
    setActiveStyle(parseInt(e.target.id));
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

  const imageGalleryDivStyle = {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    height: '700px',
  };

  return (
    <>
      <h2>Overview Widget</h2>
      <div style={imageGalleryDivStyle}>
        <ImageGallery ref={imageGalleryRef} styles={productStyleInfo.results} activeStyle={activeStyle} />
        <div style={{ 'max-width': '350px' }}>
          <ProductDetails productId={productId} productInfo={productInfo} styles={productStyleInfo.results} activeStyle={activeStyle} />
          <StyleSelector styles={productStyleInfo.results} changeActiveStyle={changeActiveStyle} activeStyle={activeStyle} />
          <PurchaseOptions ref={purchaseOptionsRef} styles={productStyleInfo.results} activeStyle={activeStyle} />
        </div>
      </div>
      <ProductDescription productInfo={productInfo} />
    </>
  );
}

export default Overview;
