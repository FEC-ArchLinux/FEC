/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaRegStar } from 'react-icons/fa';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import GH_TOKEN from '../../../../../token.js';
import RelatedModal from './relatedmodal.jsx';


function ItemCard(props) {
  const [item, changeItem] = useState('');
  const [product, changeProduct] = useState('');
  const [reviews, changeRev] = useState();
  const [openModal, changeOpenModal] = useState(false);
  const [currentPic, changeCurrentPic] = useState(0);
  const [carosel, showCarosel] = useState(false);


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

  //picturefunctions
  const pictureForward = () => {
    if (currentPic + 1 < item.photos.length) {
      changeCurrentPic(currentPic + 1);
    }
  }

  const pictureBack = () => {
    if (currentPic - 1 >= 0) {
      changeCurrentPic(currentPic - 1);
    }
  }

  //handleHover

  const handleMouseEnter = () => {
    showCarosel(true);
  };
  const handleMouseLeave = () => {
    showCarosel(false);
  };

  useEffect(() => {
    getStyles();
    getReviews();
    getProductInfo();
  }, []);



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
      <CardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-testid="itemcard" >
        <ImgWrapper>
          {carosel && <LeftPicArr onClick={pictureBack} font="4vh"><BsArrowLeftShort /></LeftPicArr> }
          {carosel && <RightPicArr onClick={pictureForward}><BsArrowRightShort /></RightPicArr>}
          {item.photos[0].thumbnail_url ? <RelatedImg src={item.photos[currentPic].thumbnail_url} onClick={() => { props.setProductId(props.item); }} /> : <RelatedImg src={props.placeholderImage} onClick={() => { props.setProductId(props.item); }} />}
          <CompareButton onClick={() => { changeOpenModal(true) }}><FaRegStar /></CompareButton>
          {carosel ? (<Carosel>
            {item.photos && item.photos.map((pic, index) => {
              return (
                <ThumbnailPic src={pic.thumbnail_url} onClick={()=>changeCurrentPic(index)}>
                </ThumbnailPic>
              )

            })}
          </Carosel>) : null}

        </ImgWrapper>
        <CardContent data-testid="productCategory">{product.category}</CardContent>
        <CardContent style={{ "font-weight": "bold" }}>{product.name}</CardContent>
        <CardContent>{price}</CardContent>
        {reviews && <StarRatings rating={reviews} starDimension="1.5vh" starSpacing="1px" />}
        {openModal && <RelatedModal closeModal={changeOpenModal} item={product} mainProduct={props.mainProduct} />}
      </CardContainer>
    );
  }
  return <span>Loading...</span>;
}

const CardContainer = styled.div`
position: relative;
width: 15vw;
flex-shrink: 0;
font-size: 1.5vh;
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

const RelatedImg = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
`;

const LeftPicArr = styled.button`
position: absolute;
top: 50%;
left: 0;
border: none;
background: none;
font-size: 3vh;
color: white;
`;

const RightPicArr = styled.button`
position: absolute;
top: 50%;
right: 0;
border: none;
background: none;
font-size: 3vh;
color: white;
`;

const CompareButton = styled.button`
  position: absolute;
  right:2%;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 25px;
  color: black;
  z-index: 5;
  &:hover {
    color: gold;
  }
`;

const Carosel = styled.div`
position:absolute;
top: 70%;
width: 100%;
height: 6vh;
display: flex;
gap: 0.3rem;
flex-direction: row;
flex-wrap: nowrap;
overflow-x: scroll;
overflow-y: hidden;

`
const ThumbnailPic = styled.img`
align-self: center;
aspect-ratio: 1/1;
height: 100%;
flex: 0 0 25%;

`

export default ItemCard;
