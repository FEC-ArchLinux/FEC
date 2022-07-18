/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
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
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  position: fixed;
  z-index: 20;
  width: 750px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const RadioText = styled.span`
  font-size: 13px;
  margin-right: 5px;
`;

const OverviewButtonStyle = styled.button`
border: none;
font-size: x-large;
opacity: 50%;
background-color: whitesmoke;
:hover {
  background-color: lightgray;
  cursor: pointer;
}`;

const Button = styled.button`
font-size: calc(2vh + 1pt);
border-width: calc(.3vh + 2px);
border-color: black;
padding: calc(.3vh + 2px);
margin: calc(.3vh + 2px);
background-color: white;
:hover {
  background-color: lightgrey;
  cursor: pointer;
}
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

  function characteristicCreater() {
    let charArray = Object.keys(metaTransfer.characteristics).map((item) => item.toLowerCase());
    let charChart = {
      size: 125052, width: 125053, comfort: 125033, fit: 125031, length: 125032, quality: 125034,
    };
    let resultObj = {};
    for (let char of charArray) {
      if (charChart[char]) {
        resultObj[charChart[char]] = Number(eval(char));
      }
    }
    return resultObj;
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
        photos: selectedImage.length > 0 ? selectedImage : [''],
        characteristics: characteristicCreater(),
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

  function cloudinaryLoad(image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pmrrp4z4");
    data.append("cloud_name", "dm84tjpoq");
    fetch("https://api.cloudinary.com/v1_1/dm84tjpoq/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((response) => {
        setSelectedImage(selectedImage.concat([response.url]));
      })
      .catch((err) => console.log(err));
  }

  return (
    <Modal>
      <div style={{ height: "630px", overflowY: "auto" }}>
        <form onSubmit={submitForm}>
          <h3 style={{ marginLeft: "-529px" }}><i>Write Your Review</i></h3>
          <OverviewButtonStyle style={{ marginTop: "-55px", float: "right" }} onClick={(event) => setNewReview(false)} type="button">x</OverviewButtonStyle>
          <p>About ** product name goes here ** </p>
          <p><b>Overall Product Rating :</b></p>
          <StarRatings rating={starRating} starRatedColor="blue" changeRating={setStarRating} numberOfStars={5} name="rating" starDimension="20px" />{starRater(starRating)}
          <div onChange={recommendSetter}>
            <p><b>Do you recommend this product?</b></p>
            <input type="radio" value="True" name="recommend" required /> Yes
            <input type="radio" value="False" name="recommend" required /> No
          </div>
          <div>
            <p><b>Characteristics: </b></p>
            {metaTransfer.characteristics.Size ? <div onChange={(event) => setSize(event.target.value)}>
              <aside style={{ marginBottom: "6px" }}><i>Size</i></aside>
              <input type="radio" value="1" name="size" required /><RadioText>A size too small</RadioText>
              <input type="radio" value="2" name="size" required /><RadioText>½ a size too small</RadioText>
              <input type="radio" value="3" name="size" required /><RadioText>Perfect</RadioText>
              <input type="radio" value="4" name="size" required /><RadioText>½ a size too big</RadioText>
              <input type="radio" value="5" name="size" required /><RadioText>A size too wide</RadioText>
            </div> : null}
            {metaTransfer.characteristics.Width ? <div onChange={(event) => setWidth(event.target.value)}>
              <aside style={{ marginTop: "8px", marginBottom: "6px" }}><i>Width</i></aside>
              <input type="radio" value="1" name="width" required /><RadioText>Too narrow</RadioText>
              <input type="radio" value="2" name="width" required /><RadioText>Slightly narrow</RadioText>
              <input type="radio" value="3" name="width" required /><RadioText>Perfect</RadioText>
              <input type="radio" value="4" name="width" required /><RadioText>Slightly wide</RadioText>
              <input type="radio" value="5" name="width" required /><RadioText>Too wide</RadioText>
            </div> : null}
            {metaTransfer.characteristics.Comfort ? <div onChange={(event) => setComfort(event.target.value)}>
              <aside style={{ marginTop: "8px", marginBottom: "6px" }}><i>Comfort</i></aside>
              <input type="radio" value="1" name="comfort" required /><RadioText>Uncomfortable</RadioText>
              <input type="radio" value="2" name="comfort" /><RadioText>Slightly uncomfortable</RadioText>
              <input type="radio" value="3" name="comfort" /><RadioText>Ok</RadioText>
              <input type="radio" value="4" name="comfort" /><RadioText>Comfortable</RadioText>
              <input type="radio" value="5" name="comfort" /><RadioText>Perfect</RadioText>
            </div> : null}
            {metaTransfer.characteristics.Quality ? <div onChange={(event) => setQuality(event.target.value)}>
              <aside style={{ marginTop: "8px", marginBottom: "6px" }}><i>Quality</i></aside>
              <input type="radio" value="1" name="quality" required /><RadioText>Poor</RadioText>
              <input type="radio" value="2" name="quality" /><RadioText>Below average</RadioText>
              <input type="radio" value="3" name="quality" /><RadioText>What I expected</RadioText>
              <input type="radio" value="4" name="quality" /><RadioText>Pretty great</RadioText>
              <input type="radio" value="5" name="quality" /><RadioText>Perfect</RadioText>
            </div> : null}
            {metaTransfer.characteristics.Length ? <div onChange={(event) => setLength(event.target.value)}>
              <aside style={{ marginTop: "8px", marginBottom: "6px" }}><i>Length</i></aside>
              <input type="radio" value="1" name="length" required /><RadioText>Runs Short</RadioText>
              <input type="radio" value="2" name="length" /><RadioText>Runs slightly short</RadioText>
              <input type="radio" value="3" name="length" /><RadioText>Perfect</RadioText>
              <input type="radio" value="4" name="length" /><RadioText>Runs slightly long</RadioText>
              <input type="radio" value="5" name="length" /><RadioText>Runs long</RadioText>
            </div> : null}
            {metaTransfer.characteristics.Fit ? <div onChange={(event) => setFit(event.target.value)}>
              <aside style={{ marginTop: "8px", marginBottom: "6px" }}><i>Fit</i></aside>
              <input type="radio" value="1" name="fit" required /><RadioText>Runs tight</RadioText>
              <input type="radio" value="2" name="fit" /><RadioText>Runs slightly tight</RadioText>
              <input type="radio" value="3" name="fit" /><RadioText>Perfect</RadioText>
              <input type="radio" value="4" name="fit" /><RadioText>Runs slightly tight</RadioText>
              <input type="radio" value="5" name="fit" /><RadioText>Runs tight</RadioText>
            </div> : null}
          </div>
          <div style={{ marginTop: "35px", marginBottom: "15px", marginLeft: "-63px" }}>
            <label htmlFor="summary"><b>Summary: </b></label>
            <input onChange={(event) => setSummary(event.target.value)} size="60" maxLength="60" name="summary" placeholder="Example: Best Purchase Ever" /><br />
          </div>
          <label htmlFor="body"><b>Review: </b></label>
          <textarea rows="4" cols="70" onChange={(event) => setBody(event.target.value)} size="100" maxLength="1000" name="body" placeholder="“Why did you like the product or not?”" minLength="50" required />
          <aside style={{ fontSize: "12px", marginLeft: "379px", marginBottom: "15px" }}><i>Minimum required characters left:</i> { body.length < 50 ? 50 - body.length : 'Minimum Reached'}</aside>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="myImage"><b>{selectedImage.length < 5 ? "Select Image:" : "Max Images Selected"} </b></label>
            {selectedImage.length < 5 ? <input type="file" name="myImage" onChange={(event) => { cloudinaryLoad(event.target.files[0]); }} /> : null}
            {selectedImage.length > 0 ? selectedImage.map((image, index) => <img key={index} alt="not found" width="50px" height="50px" src={image} />) : null}
          </div>
          <div style={{ marginLeft: "-171px" }}>
            <label htmlFor="nickname"><b>What is your nickname: </b></label>
            <input onChange={(event) => setNickName(event.target.value)} size="30" maxLength="60" name="nickname" placeholder="Example: jackson11!" required /><br />
            <aside style={{ fontSize: "12px", marginLeft: "69px", marginBottom: "15px" }}><i>For privacy reasons, do not use your full name or email address</i></aside>
          </div>
          <div style={{ marginLeft: "-201px" }}>
            <label htmlFor="email"><b>What is your email: </b></label>
            <input type="email" onChange={(event) => setEmail(event.target.value)} size="30" maxLength="60" name="email" placeholder="Example: jackson11@email.com" required /><br />
            <aside style={{ fontSize: "12px", marginLeft: "101px", marginBottom: "15px" }}><i>For authentication reasons, you will not be emailed</i></aside>
          </div>
          <Button type="submit">Submit Review</Button>
          <Button onClick={(event) => setNewReview(false)} type="button">Exit</Button>
        </form>
      </div>
    </Modal>
  );
}

export default AddReview;
