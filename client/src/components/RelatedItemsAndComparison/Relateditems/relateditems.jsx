/* eslint-disable react/prop-types */
import React from "react";
import ItemCard from "./itemcard.jsx";

function RelatedItems({ relatedItems, mainProduct, setProductId }) {

  // function clickComponent(item){
  //   console.log(item);
  //   setProductId(item);
  // }
  const relatedList = relatedItems.map((item) => (
      <ItemCard
        key={item}
        item={item}
        mainProduct={mainProduct}
      />
  ));
  return (
    <span>
      {relatedList}
    </span>

  );
}

export default RelatedItems;
