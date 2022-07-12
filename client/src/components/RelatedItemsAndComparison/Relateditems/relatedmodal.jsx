/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GH_TOKEN from '../../../../../token.js';


function RelatedModal(props) {
  const [mainfeature, changeMain] = useState();

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
  if (mainfeature) {
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
        if (mainfeatureMap.get(key) === true) {
          result.push('✓');
        } else {
          result.push(mainfeatureMap.get(key));
        }
      } else {
        result.push(null);
      }

      if (secondFeatureMap.has(key)) {
        if (secondFeatureMap.get(key) === true) {
          result.push('✓');
        } else {
          result.push(secondFeatureMap.get(key));
        }
      } else {
        result.push(null);
      }
      combinedFeatures.push(result);
    });

  }
  return (
    <ModalWrapper>
      <tr>COMPARING</tr>
      <span><button type="button" onClick={() => { props.closeModal(false); }}>x</button></span>
      <tr>
        <th>Current Product Name</th>
        <th> </th>
        <th>Compared Product Name</th>
      </tr>
      <TableWrapper>
        {combinedFeatures.map((item) => (
          <tr>
            <td>{item[1]}</td>
            <td>{item[0]}</td>
            <td>{item[2]}</td>
          </tr>

        ))}
      </TableWrapper>

    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
background-color: rgba(0,0,0,0.2);
width: 20%;
height: 60%;
display: flex;
position: fixed;
left: 30%;
top: 30%;
display: block;
`;

const TableWrapper = styled.div`
color: black;
padding: 10px;
text-align: center;
vertical-align: bottom;
font-family: Arial, Helvetica, sans-serif;


`;

export default RelatedModal;
