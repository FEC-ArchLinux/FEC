/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import GH_TOKEN from '../../../../token.js';
import styled from "styled-components";
import Outfit from './Outfit/outfit.jsx';
import RelatedItems from './Relateditems/relateditems.jsx';

function RelatedItemsAndComparison(props) {
  const [relatedItems, changeRelatedItems] = useState([]);
  // const [outfitList, setOutfitList] = useState([]);

  function getRelatedItems() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.productId}/related`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then((res) => {
      changeRelatedItems(res.data);
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    getRelatedItems();
  }, [props]);

  const getClicked = (event) => {
    props.clickTracker(event, 'RelatedItems');
  }

  return (
    <MainWrapper onClick={getClicked}>
      <h3>RELATED PRODUCTS</h3>
      <RelatedItems relatedItems={relatedItems} mainProduct={props.productId} setProductId={props.setProductId} placeHolderImage={props.placeHolderImage} />
      <h3>YOUR OUTFIT</h3>
      <Outfit
        mainProduct={props.productId}
        placeHolderImage={props.placeHolderImage}
      // outfitList={outfitList}
      // handleAddOutfit={handleAddOutfit}
      // handleRemove={handleRemove}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
margin: auto;
width: 60%;
`

export default RelatedItemsAndComparison;
