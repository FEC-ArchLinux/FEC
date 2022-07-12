import React, { useState, useEffect } from 'react';
import RelatedItems from './Relateditems/relateditems.jsx';
import axios from "axios";
import GH_TOKEN from '../../../../token.js';
import Outfit from './Outfit/outfit.jsx';

function RelatedItemsAndComparison(props) {
  const [relatedItems, changeRelatedItems] = useState([]);
  const [outfitList, changeOutfitList] = useState([]);

  function getRelatedItems() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${props.productId}/related`, {
      headers: {
        authorization: GH_TOKEN,
      },
    }).then(res => {
      changeRelatedItems(res.data);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    getRelatedItems();
  }, []);


  return (
    <>
      <RelatedItems relatedItems={relatedItems} />
      <Outfit />
    </>
  );
}

export default RelatedItemsAndComparison;
