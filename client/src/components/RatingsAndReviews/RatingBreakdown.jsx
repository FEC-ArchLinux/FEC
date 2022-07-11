/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import GH_TOKEN from '../../../../token.js';
import AverageStar from './AverageStar.jsx';

function RatingBreakdown({ productId }) {
  const [metaData, setMetaData] = useState([]);

  function getMetaData() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${productId}`,
      headers: {
        Authorization: GH_TOKEN,
      },
    };
    axios(config)
      .then((response) => {
        setMetaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMetaData();
  }, []);

  return (
    <div>
      <AverageStar ratings={metaData.ratings} />
    </div>
  );
}

export default RatingBreakdown;
