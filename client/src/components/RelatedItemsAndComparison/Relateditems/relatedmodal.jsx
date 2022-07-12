/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import GH_TOKEN from '../../../../../token.js';

function RelatedModal(props) {
  const [mainfeature, changeMain] = useState([]);

  // GET main product information
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.mainProduct}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then((res) => {
      changeMain(res.data.features);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // combine two tables into a comparison table
  let combinedFeatures = [];
  let mainfeatureMap = new Map();
  mainfeature.forEach((item) => {
    mainfeatureMap.set(item.feature, item.value);
  });
  let secondFeatureMap = new Map();
  props.item.features.forEach((item) => {
    secondFeatureMap.set(item.feature, item.value);
  });
  let unionKeys = new Set([...mainfeatureMap.keys(), ...secondFeatureMap.keys()]);

  unionKeys.forEach((key) => {
    let result = [];
    result.push(key);
    if (mainfeatureMap.has(key)) {
      result.push(mainfeatureMap.get(key));
    } else {
      result.push(null);
    }

    if (secondFeatureMap.has(key)) {
      result.push(secondFeatureMap.get(key));
    } else {
      result.push(null);
    }
    combinedFeatures.push(result);
  });

  return (
    <table>
      <tr>COMPARING</tr>
      <span><button type="button" onClick={() => { props.closeModal(false); }}>x</button></span>
      <tr>
        <th>Current Product Name</th>
        <th> </th>
        <th>Compared Product Name</th>
      </tr>
      <tbody>
        {combinedFeatures.map((item) => (
          <tr>
            <td>{item[1]}</td>
            <td>{item[0]}</td>
            <td>{item[2]}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default RelatedModal;
