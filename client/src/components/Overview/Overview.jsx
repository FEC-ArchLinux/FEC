import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';
import ImageGallery from './ImageGallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelector from './StyleSelector.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';
import ProductDescription from './ProductDescription.jsx';

function Overview({ productId, placeHolderImage, clickTracker }) {
  const [productInfo, setProductInfo] = useState([]);
  const [productStyleInfo, setProductStyleInfo] = useState([]);
  const [activeStyle, setActiveStyle] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const imageGalleryRef = useRef();
  const purchaseOptionsRef = useRef();

  // changes actively shown style
  function changeActiveStyle(e) {
    // when new style is selected, change active big image to first in array
    imageGalleryRef.current.selectBigPicture();
    // reset selected size option
    purchaseOptionsRef.current.resetSelectedSize();
    setActiveStyle(Number(e.target.id));
    //setOutOfStock(false);
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
    imageGalleryRef.current.selectBigPicture();
    purchaseOptionsRef.current.resetSelectedSize();
    setActiveStyle(0);
    //setOutOfStock(false);
    getProductInfo();
    getProductStyleInfo();
  }, [productId]);

  function getClicked(e) {
    clickTracker(e, 'Overview');
  }

  const imageGalleryDivStyle = {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'flex-start',
    height: "70vh",
    gap: '5%',
  };

  const productDetailsStyle = {
    display: (isExpanded ? 'none' : 'flex'),
    'max-width': '340px',
    width: '30%',
    'flex-direction': 'column',
    'max-height': '100%',
    'font-size': "calc(1.5vh + 2pt)",
  };

  function toggleExpandedView() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div onClick={getClicked}>
      <div style={imageGalleryDivStyle}>
        <ImageGallery ref={imageGalleryRef} styles={productStyleInfo.results} activeStyle={activeStyle} isExpanded={isExpanded} toggleExpandedView={toggleExpandedView} placeHolderImage={placeHolderImage} />
        <div style={productDetailsStyle}>
          <ProductDetails productId={productId} productInfo={productInfo} styles={productStyleInfo.results} activeStyle={activeStyle} />
          <StyleSelector styles={productStyleInfo.results} changeActiveStyle={changeActiveStyle} activeStyle={activeStyle} placeHolderImage={placeHolderImage} />
          <PurchaseOptions ref={purchaseOptionsRef} styles={productStyleInfo.results} activeStyle={activeStyle} outOfStock={outOfStock} setOutOfStock={setOutOfStock} />
        </div>
      </div>
      <ProductDescription productInfo={productInfo} />
    </div>
  );
}

export default Overview;
