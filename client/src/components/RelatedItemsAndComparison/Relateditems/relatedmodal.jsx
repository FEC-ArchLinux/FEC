/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaRegWindowClose } from 'react-icons/fa';
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
      <ComparisonTitle>COMPARING</ComparisonTitle>
      <CloseButton type="button" onClick={() => { props.closeModal(false); }}><FaRegWindowClose /></CloseButton>
      <tr>
        <th>Current Product Name</th>
        <th> </th>
        <th>Compared Product Name</th>
      </tr>
      <TableWrapper>
        {combinedFeatures.map((item) => (
          <tr>
            <TableElement>{item[1]}</TableElement>
            <TableElement>{item[0]}</TableElement>
            <TableElement>{item[2]}</TableElement>
          </tr>

        ))}
      </TableWrapper>

    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
background-color: white;
border-style: solid;
border_width: 5px;
width: 20%;
height: 40%;
display: flex;
overflow: scroll;
position: fixed;
left: 30%;
top: 30%;
display: block;
z-index: 10;
`;
const ComparisonTitle = styled.div`
text-align: center;
font-size: 20px;
font-weight: bold;
color: grey;
`;

const CloseButton = styled.span`
position: absolute;
top: 5%;
right: 5%;
font: 40px;
border: none;
background: none;

`;

const TableWrapper = styled.div`
color: black;
font-size: 20px;
padding: 10px;
text-align: center;
vertical-align: bottom;
`;

const TableElement = styled.td`
padding: 15px;

`

export default RelatedModal;
