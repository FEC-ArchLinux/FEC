/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import axios from "axios";
import GH_TOKEN from '../../../../../token.js';
import RelatedModal from './relatedmodal.jsx';

function ItemCard(props) {
  const [item, changeItem] = useState('');
  const [product, changeProduct] = useState('');
  const [reviews, changeRev] = useState({});
  const [openModal, changeOpenModal] = useState(false);

  // GET styles
  function getStyles() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.item}/styles`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then((res) => {
      changeItem(res.data.results[0]);
    }).catch((err) => {
      console.log(err);
    });
  }
  // GET product info
  function getProductInfo() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.item}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then((res) => {
      changeProduct(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  // GET reviews
  function getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`, {
      headers: {
        authorization: GH_TOKEN,
      },
      params: {
        product_id: props.item,
      },
    }).then((res) => {
      changeRev(res.data.ratings);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getStyles();
    getReviews();
    getProductInfo();
  }, []);


  // reviews calculation
  function averageReviews(obj) {
    let totalStarCount = 0;
    let totalCount = 0;
    for (var k in obj) {
      totalStarCount += parseInt(obj[k]) * parseInt(k)
      totalCount += parseInt(obj[k])
    }
    return Math.round((totalStarCount / totalCount) * 100) / 100;
  }
  // comparison table function

  // price toggle function
  let price;
  if (item.sale_price) {
    price = (
      <>
        <span>${item.original_price}</span>;
        <span>${item.sale_price}</span>;
      </>
    )
  } else {
    price = <span>${item.original_price}</span>;
  }

  if (item && product && reviews) {
    return (
      <span>
        <img height="200px" width="150px" src={item.photos[0].thumbnail_url} alt="style" />
        <button onClick={() => { changeOpenModal(true) }}>star</button>
        <span>{product.category}</span>
        <span>{item.name}</span>
        <span>{price}</span>
        <span>Average Review:{averageReviews(reviews)}</span>
        {openModal && <RelatedModal closeModal={changeOpenModal} item={product} mainProduct={props.mainProduct} />}
        <br />
      </span>
    );
  }
  return <span>Loading...</span>;
}
export default ItemCard;
