/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ItemCard from "./itemcard.jsx";


function RelatedItems({ relatedItems, mainProduct, setProductId }) {

    const [imagesToLeft, setImagesToLeft] = useState(false);

    const slideLeft = () => {
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
    }
    const relatedList = relatedItems.map((item) => (
      <ItemCard
        key={item}
        item={item}
        mainProduct={mainProduct}
        setProductId={setProductId}
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
            {relatedList}
          </ListContainer>
          <RightButtonWrapper>
            <RightButton onClick={slideRight}><FaChevronRight /></RightButton>
          </RightButtonWrapper>
        </ListWrapper>
      </div>


    );
  }

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
height: 400px;
width: 100%;
position: relative;

`;

const ListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
overflow: scroll;
height: 100%;
width: 100%;
position: relative;
scroll-behavior: smooth;
`;

const LeftButton = styled.button`
position: sticky;
font-size: 40px;
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
font-size: 40px;
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
