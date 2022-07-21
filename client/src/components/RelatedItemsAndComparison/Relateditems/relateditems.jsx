/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ItemCard from "./itemcard.jsx";

function RelatedItems({ relatedItems, mainProduct, setProductId, placeHolderImage }) {

  const [imagesToLeft, setImagesToLeft] = useState(false);
  const [imagesToRight, setImagesToRight] = useState(true);

  const slideLeft = () => {
    setImagesToRight(true);
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 350;
    if (slider.scrollLeft <= 350) {
      setImagesToLeft(false);
    }
  }
  const slideRight = () => {
    setImagesToLeft(true);
    const slider = document.getElementById("slider");
    slider.scrollLeft += 350;
    if (slider.scrollWidth - slider.clientWidth - slider.scrollLeft - 350 <= 0) {
      setImagesToRight(false);
    }
  }
  const relatedList = relatedItems.map((item) => (
    <ItemCard
      key={item}
      item={item}
      mainProduct={mainProduct}
      setProductId={setProductId}
      placeholderImage={placeHolderImage}
    />


  ));
  return (
    <div width="100%">
      <ListWrapper>
        <LeftButtonWrapper>
          {imagesToLeft ? <LeftButton onClick={slideLeft}><FaChevronLeft /></LeftButton> : null}
        </LeftButtonWrapper>
        <ListContainer id="slider">
          {relatedList}
        </ListContainer>
        <RightButtonWrapper>
          {imagesToRight ? <RightButton onClick={slideRight} data-testid="rightbutton"><FaChevronRight /></RightButton> : null}
        </RightButtonWrapper>
      </ListWrapper>
    </div>


  );
}

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
position: relative;

`;

const ListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
overflow: scroll;
overflow-x: hidden;
overflow-y: hidden;
height: 100%;
width: 100%;
position: relative;
scroll-behavior: smooth;
`;

const LeftButton = styled.button`
position: sticky;
font-size: 3rem;
background: none;
border: none;
color: grey;
`;

const LeftButtonWrapper = styled.div`
position: absolute;
left:0;
top: 35%;
z-index: 1;
`
const RightButton = styled.button`
position: sticky;
font-size: 3rem;
background: none;
border: none;
color: grey;
`;

const RightButtonWrapper = styled.div`
position: absolute;
right:0;
top: 35%;
z-index: 1;

`

export default RelatedItems;
