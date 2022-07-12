/* eslint-disable react/prop-types */
import React from "react";
import ItemCard from "./itemcard.jsx";

function RelatedItems({ relatedItems }) {
  const relatedList = relatedItems.map((item) => <ItemCard key={item} item={item} />);
  return (
    <span>
      {relatedList}
    </span>

  );
}

export default RelatedItems;
