/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';
import GH_TOKEN from '../../../../../token.js';


function OutfitCard(props) {
  const [item, changeItem] = useState('');
  const [product, changeProduct] = useState('');
  const [reviews, changeRev] = useState();
  // const [openModal, changeOpenModal] = useState(false);


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
      changeRev(averageReviews(res.data.ratings));
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getStyles();
    getReviews();
    getProductInfo();
  }, [props]);

  const handleRemove = () => {

  }

  // price toggle function
  let price;
  if (item.sale_price) {
    price = (
      <>
        <div style={{ 'text-decoration': 'line-through', 'color': 'red' }} >${item.original_price}</div>;
        <div>${item.sale_price}</div>;
      </>
    )
  } else {
    price = <div>${item.original_price}</div>;
  }

  if (product && item) {
    return (
      <CardContainer>
        <ImgWrapper>
          {item.photos[0].thumbnail_url ? <img height="300rem" width="100%" src={item.photos[0].thumbnail_url} onClick={() => { props.setProductId(props.item); }} /> : <img src={props.placeHolderImage} height="300rem" width="100%" />}
          <RemoveButton onClick={()=>(props.handleRemove(props.item))}><FaTimes /></RemoveButton>
        </ImgWrapper>
        <CardContent>{product.category}</CardContent>
        <CardContent style={{ "font-weight": "bold" }}>{product.name}</CardContent>
        <CardContent>{price}</CardContent>
        {reviews && <StarRatings rating={reviews} starDimension="15px" starSpacing="1px" />}
        {/* {openModal && <RelatedModal closeModal={changeOpenModal} item={product} mainProduct={props.mainProduct} />} */}
      </CardContainer>
    );
  }
  return <span>Loading...</span>;
}

const CardContainer = styled.div`
position: relative;
height: 100%;
width: 20rem;
flex-shrink: 0;
margin: 0px 40px;
background: rgba(255,255,255,0.1);
&:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  bottom-border: 0px;
  cursor: pointer;
}
`;
const CardContent = styled.div`
margin: 5px 0px;
`;
const ImgWrapper = styled.div`
position: relative;
`;

const RemoveButton = styled.button`
  position: absolute;
  right:3%;
  top: 3%;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 25px;
  color: white;
  z-index: 5;
  &:hover {
    color: black;
  }

`;

export default OutfitCard;
