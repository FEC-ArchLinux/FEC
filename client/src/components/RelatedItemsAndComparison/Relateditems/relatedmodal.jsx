/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import GH_TOKEN from '../../../../../token.js';


function RelatedModal(props) {
  const [mainProduct, changeMainProduct] = useState({});

  // GET main product information
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.mainProduct}`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then((res) => {
      changeMainProduct(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // combine two tables into a comparison table
  const combinedFeatures = [];
  if (mainProduct.features) {
    const mainfeatureMap = new Map();
    mainProduct.features.forEach((item) => {
      mainfeatureMap.set(item.feature, item.value);
    });
    const secondFeatureMap = new Map();
    props.item.features.forEach((item) => {
      secondFeatureMap.set(item.feature, item.value);
    });
    const unionKeys = new Set([...mainfeatureMap.keys(), ...secondFeatureMap.keys()]);

    unionKeys.forEach((key) => {
      const result = [];
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
      <CloseButton type="button" onClick={() => { props.closeModal(false); }}><AiOutlineCloseCircle /></CloseButton>
      <TableWrapper data-testid="comparison" >
      <tr>
        <th>{mainProduct.name}</th>
        <th> </th>
        <th>{props.item.name}</th>
      </tr>
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
font-size: calc(1.5vh + 2pt);
`;
const ComparisonTitle = styled.div`
text-align: left;
fontWeight: bold;
color: grey;
margin: 15px;
`;

const CloseButton = styled.span`
position: absolute;
top: 0%;
right: 0%;
font-size: x-large;
border: none;
background: none;

`;

const TableWrapper = styled.div`
color: black;
padding: 10px;
text-align: center;
vertical-align: bottom;
`;

const TableElement = styled.td`
padding: 15px;
`

export default RelatedModal;
