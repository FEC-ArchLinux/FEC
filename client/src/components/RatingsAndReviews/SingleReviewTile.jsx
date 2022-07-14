/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const ReviewContainer = styled.div`
  width: 650px;
  border-bottom: 2px solid rgb(105 105 105 / 44%);
  margin-top: 25px;
  padding-bottom: 10px;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Modal = styled.img`
  text-align: center;
  border: 1px solid #ccc;
  position: fixed;
  z-index: 20;
  background: #fff;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

function SingleReviewTile({ review }) {
  const [modalGate, setModalGate] = useState(false);
  const [imageModal, setImageModal] = useState('');
  function dateSetter() {
    if (review) {
      const date = new Date(review.date);
      const newDate = date.toString();
      return newDate.slice(0, 10);
    }
    return 'Monkey';
  }

  function imageSetter(photo) {
    setModalGate(true);
    setImageModal(photo);
  }

  if (modalGate) {
    return (
      <Overlay>
        <img src={imageModal} alt="review-img" />
      </Overlay>
    );
  }
  return (
    <ReviewContainer>
      <StarRatings isSelectable="false" starRatedColor="black" numberOfStars={5} starSpacing="2px" starDimension="10px" rating={review.rating} />
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", marginLeft: "5px", float: "right" }}>{dateSetter()}</span>
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", float: "right" }}>{review.recommend ? `✔︎ ${review.reviewer_name}, ` : `${review.reviewer_name}, `}</span><br />
      <span style={{ display: "inline-block", margin: "15px 0px" }}><b>{review.summary}</b></span><br />
      <span style={{ display: "inline-block", margin: "15px 0px" }}>{review.body}</span><br />
      {review.photos.length > 0 ? review.photos.map((photo, index) => <img onClick={(event) => imageSetter(photo.url)} style={{ border: '1px solid #ccc' }} key={index} src={photo.url} alt="review-img" width="30" height="40" />) : null}<br />
      <span style={{ fontSize: "10px", marginBottom: "5px", display: "inline-block" }}>{review.recommend ? "✅  I recommend this product" : null}</span><br />
      {review.response !== null ? <><span style={{ backgroundColor: 'rgb(105 105 105 / 44%)' }}>{review.response}</span><br /></> : null}
      <span style={{ marginTop: "-10px", float: "right" }}>Helpful? Yes ({review.helpfulness}) || No</span>
    </ReviewContainer>
  );
}

export default SingleReviewTile;
