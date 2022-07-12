/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import GH_TOKEN from '../../../../token.js';
import Outfit from './Outfit/outfit.jsx';
import RelatedItems from './Relateditems/relateditems.jsx';

function RelatedItemsAndComparison(props) {
  const [relatedItems, changeRelatedItems] = useState([]);
  const [outfitList, changeOutfitList] = useState([]);

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
  }, []);

  return (
    <>
      <RelatedItems relatedItems={relatedItems} mainProduct={props.productId} setProductId={props.setProductId}/>
      <Outfit />
    </>
  );
}

export default RelatedItemsAndComparison;
