/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import GH_TOKEN from '../../../../token.js';

const Modal = styled.div`
  text-align: center;
  background: white;
  border: 1px solid #ccc;
  position: fixed;
  z-index: 20;
  background: #fff;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

function AddReview({ productId, setNewReview, metaTransfer }) {
  let [starRating, setStarRating] = useState(0);
  let [recommend, setRecommend] = useState(null);
  let [summary, setSummary] = useState('');
  let [body, setBody] = useState('');
  let [selectedImage, setSelectedImage] = useState([]);
  let [nickName, setNickName] = useState('');
  let [email, setEmail] = useState('');
  let [size, setSize] = useState(0);
  let [width, setWidth] = useState(0);
  let [comfort, setComfort] = useState(0);
  let [quality, setQuality] = useState(0);
  let [length, setLength] = useState(0);
  let [fit, setFit] = useState(0);

  function starRater(numberStars) {
    if (numberStars === 1) {
      return <p>1 stars - Poor </p>;
    } else if (numberStars === 2) {
      return <p>2 stars - Fair </p>;
    } else if (numberStars === 3) {
      return <p>3 stars - Average </p>;
    } else if (numberStars === 4) {
      return <p>4 stars - Good </p>;
    } else if (numberStars === 5) {
      return <p>5 stars - Great </p>;
    }
    return null;
  }
  function recommendSetter(event) {
    setRecommend(event.target.value === "True" ? true : false);
  }

  function validateSubmit() {
    if (starRating === 0) {
      window.alert('Must select Overall Product Rating');
      return false;
    }
    let imageChecker = selectedImage.some((current) => typeof current !== 'string');
    if (imageChecker && selectedImage.length > 0) {
      window.alert('Image is not correctly formatted to load, try again');
      return false;
    }
    return true;
  }
  function submitForm() {
    event.preventDefault();
    let validate = validateSubmit();

    if (validate) {
      let newData = JSON.stringify({
        product_id: productId,
        rating: starRating,
        summary: summary,
        body: body,
        recommend: recommend,
        name: nickName,
        email: email,
        photos: [''],
        characteristics: {
        },
      });

      let config = {
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/',
        headers: {
          Authorization: GH_TOKEN,
          'Content-Type': 'application/json',
        },
        data: newData,
      };

      axios(config)
        .then((response) => console.log(JSON.stringify(response.data)))
        .catch((error) => console.log(error));

      setNewReview(false);
    }
  }

  return (
    <Modal>
      <form onSubmit={submitForm}>
        <h3>Write Your Review</h3>
        <p>About ** product name goes here ** </p>
        <p><b>Overall Product Rating :</b></p>
        <StarRatings rating={starRating} starRatedColor="blue" changeRating={setStarRating} numberOfStars={5} name="rating" starDimension="20px" />{starRater(starRating)}
        <div onChange={recommendSetter} className="radio-btn">
          <p><b>Do you recommend this product?</b></p>
          <input type="radio" value="True" name="recommend" required /> Yes
          <input type="radio" value="False" name="recommend" required /> No
        </div>
        <div>
          <p><b>Characteristics: </b></p>
          {metaTransfer.characteristics.Size ? <div onChange={(event) => setSize(event.target.value)}>
            <aside>Size</aside>
            <input type="radio" value="1" name="size" required /> A size too small
            <input type="radio" value="2" name="size" required /> ½ a size too small
            <input type="radio" value="3" name="size" required /> Perfect
            <input type="radio" value="4" name="size" required /> ½ a size too big
            <input type="radio" value="5" name="size" required /> A size too wide
          </div> : null}
          {metaTransfer.characteristics.Width ? <div onChange={(event) => setWidth(event.target.value)}>
            <aside>Width</aside>
            <input type="radio" value="1" name="width" required /> Too narrow
            <input type="radio" value="2" name="width" required /> Slightly narrow
            <input type="radio" value="3" name="width" required /> Perfect
            <input type="radio" value="4" name="width" required /> Slightly wide
            <input type="radio" value="5" name="width" required /> Too wide
          </div> : null}
          {metaTransfer.characteristics.Comfort ? <div onChange={(event) => setComfort(event.target.value)}>
            <aside>Comfort</aside>
            <input type="radio" value="1" name="comfort" required /> Uncomfortable
            <input type="radio" value="2" name="comfort" /> Slightly uncomfortable
            <input type="radio" value="3" name="comfort" /> Ok
            <input type="radio" value="4" name="comfort" /> Comfortable
            <input type="radio" value="5" name="comfort" /> Perfect
          </div> : null}
          {metaTransfer.characteristics.Quality ? <div onChange={(event) => setQuality(event.target.value)}>
            <aside>Quality</aside>
            <input type="radio" value="1" name="quality" required /> Poor
            <input type="radio" value="2" name="quality" /> Below average
            <input type="radio" value="3" name="quality" /> What I expected
            <input type="radio" value="4" name="quality" /> Pretty great
            <input type="radio" value="5" name="quality" /> Perfect
          </div> : null}
          {metaTransfer.characteristics.Length ? <div onChange={(event) => setLength(event.target.value)}>
            <aside>Length</aside>
            <input type="radio" value="1" name="length" required /> Runs Short
            <input type="radio" value="2" name="length" /> Runs slightly short
            <input type="radio" value="3" name="length" /> Perfect
            <input type="radio" value="4" name="length" /> Runs slightly long
            <input type="radio" value="5" name="length" /> Runs long
          </div> : null}
          {metaTransfer.characteristics.Fit ? <div onChange={(event) => setFit(event.target.value)}>
            <aside>Fit</aside>
            <input type="radio" value="1" name="fit" required /> Runs tight
            <input type="radio" value="2" name="fit" /> Runs slightly tight
            <input type="radio" value="3" name="fit" /> Perfect
            <input type="radio" value="4" name="fit" /> Runs slightly tight
            <input type="radio" value="5" name="fit" /> Runs tight
          </div> : null}
        </div>
        <label htmlFor="summary"><b>Summary: </b></label>
        <input onChange={(event) => setSummary(event.target.value)} size="60" maxLength="60" name="summary" placeholder="Example: Best Purchase Ever" /><br />
        <label htmlFor="body"><b>Review: </b></label>
        <textarea rows="4" cols="70" onChange={(event) => setBody(event.target.value)} size="100" maxLength="1000" name="body" placeholder="“Why did you like the product or not?”" minLength="50" required />
        <aside>Minimum required characters left: { body.length < 50 ? 50 - body.length : 'Minimum Reached'}</aside>
        <div>
          <label htmlFor="myImage"><b>{selectedImage.length < 5 ? "Select Image:" : "Max Images Selected"} </b></label>
          {selectedImage.length < 5 ? <input type="file" name="myImage" onChange={(event) => { setSelectedImage(selectedImage.concat([URL.createObjectURL(event.target.files[0])])); }} /> : null}
          {selectedImage.length > 0 ? selectedImage.map((image) => <img alt="not fount" width="50px" height="50px" src={image} />) : null}
        </div>
        <div>
          <label htmlFor="nickname"><b>What is your nickname: </b></label>
          <input onChange={(event) => setNickName(event.target.value)} size="60" maxLength="60" name="nickname" placeholder="Example: jackson11!" required /><br />
          <aside>For privacy reasons, do not use your full name or email address</aside>
        </div>
        <div>
          <label htmlFor="email"><b>What is your email: </b></label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} size="60" maxLength="60" name="email" placeholder="Example: jackson11@email.com" required /><br />
          <aside>For authentication reasons, you will not be emailed</aside>
        </div>
        <button type="submit">Submit Review</button>
        <button onClick={(event) => setNewReview(false)} type="button">Exit</button>
      </form>
    </Modal>
  );
}

export default AddReview;

// 125052: size, 125053: width,
// 125033: comfort, 125031: fit, 125032: length, 125034: quality,
