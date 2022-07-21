/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';

const ReviewContainer = styled.div`
  width: 750px;
  border-bottom: 2px solid rgb(105 105 105 / 44%);
  margin-top: 25px;
  padding-bottom: 15px;
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
  border: 1px solid grey;
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
  const [ratingGiven, setRatingGiven] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  function dateSetter() {
    if (review) {
      const date = new Date(review.date);
      const newDate = date.toString();
      return newDate.slice(4, 15);
    }
    return 'Monkey';
  }

  function imageSetter(photo) {
    setModalGate(true);
    setImageModal(photo);
  }

  if (modalGate) {
    return (
      <Overlay onClick={() => setModalGate(false)}>
        <Modal src={imageModal} alt="review-img" />
      </Overlay>
    );
  }

  function helpfulApi(id) {
    const config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/helpful`,
      headers: { Authorization: GH_TOKEN },
    };

    axios(config)
      .then((response) => setRatingGiven('helpful'))
      .catch((error) => console.log(error));
  }
  function reportApi(id) {
    const config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/report`,
      headers: { Authorization: GH_TOKEN },
    };

    axios(config)
      .then((response) => setRatingGiven('reported'))
      .catch((error) => console.log(error));
  }
  return (
    <ReviewContainer>
      <StarRatings isSelectable="false" starRatedColor="grey" numberOfStars={5} starSpacing="2px" starDimension="10px" rating={review.rating} />
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", marginLeft: "5px", float: "right" }}>{dateSetter()}</span>
      <span style={{ color: "rgb(105,105,105)", fontSize: "12px", float: "right" }}>{review.recommend ? `✔︎ ${review.reviewer_name}, ` : `${review.reviewer_name}, `}</span><br />
      <span style={{ display: "inline-block", margin: "15px 0px" }}><b>{review.summary}</b></span><br />
      {review.body.length > 250 && seeMore === false ? <><span style={{ display: "inline-block", margin: "15px 0px" }}>{review.body.slice(0, 250)}<small onClick={() => setSeeMore(true)}>... <u>(see more)</u></small></span><br /></> : <><span style={{ display: "inline-block", margin: "15px 0px" }}>{review.body}</span><br /></>}
      {review.photos.length > 0 ? review.photos.map((photo, index) => <img onClick={(event) => imageSetter(photo.url)} style={{ border: '1px solid #ccc' }} key={index} src={photo.url} alt="review-img" width="30" height="40" />) : null}<br />
      <span style={{ fontSize: "10px", marginBottom: "5px", display: "inline-block" }}>{review.recommend ? "✅  I recommend this product" : null}</span><br />
      {review.response !== null ? <><span style={{ backgroundColor: 'rgb(105 105 105 / 44%)' }}>{review.response}</span><br /></> : null}
      {ratingGiven === false ? (
        <><span onClick={() => reportApi(review.review_id)} style={{ marginLeft: "2px", padding: "2px", border: '1px solid red', borderRadius: "10px", marginTop: "-10px", float: "right" }}>{` Report`}</span>
          <span onClick={() => helpfulApi(review.review_id)} style={{ padding: "2px", border: '1px solid green', borderRadius: "10px", marginTop: "-10px", float: "right" }}>{`Helpful? Yes (${review.helpfulness})`}</span>
        </>
      ) : null}
      {ratingGiven === 'helpful' ? <span style={{ padding: "2px", border: '1px solid green', borderRadius: "10px", marginTop: "-10px", float: "right" }}>{` Submitted | Helpful (${review.helpfulness + 1})`}</span> : null}
      {ratingGiven === 'reported' ? <span style={{ padding: "2px", border: '1px solid red', borderRadius: "10px", marginTop: "-10px", float: "right" }}>{` Reported `}</span> : null}
    </ReviewContainer>
  );
}

export default SingleReviewTile;
