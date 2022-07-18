import React, { useState } from "react";
import styled from "styled-components";
import AddOutfit from "./addoutfit.jsx";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


function Outfit({ mainProduct, placeHolderImage, outfitList, handleAddOutfit, handleRemove }) {
  const [imagesToLeft, setImagesToLeft] = useState(false);

  const slideLeft = () => {
    const slider = document.getElementById("outfitSlider");
    slider.scrollLeft -= 350;
    if (slider.scrollLeft <= 350) {
      setImagesToLeft(false);
    }
  }
  const slideRight = () => {
    setImagesToLeft(true);
    const slider = document.getElementById("outfitSlider");
    slider.scrollLeft += 350;
  }
  return (
    <OutWrapper>
      <LeftButtonWrapper>
        {imagesToLeft ? <LeftButton onClick={slideLeft}><FaChevronLeft /></LeftButton> : null}
      </LeftButtonWrapper>
      <OutfitWrapper id="outfitSlider">
        <AddOutfit
          mainProduct={mainProduct}
          placeHolderImage={placeHolderImage}
          outfitList={outfitList}
          handleAddOutfit={handleAddOutfit}
          handleRemove={handleRemove}
        ></AddOutfit>
      </OutfitWrapper>
      <RightButtonWrapper>
        <RightButton onClick={slideRight}><FaChevronRight /></RightButton>
      </RightButtonWrapper>
    </OutWrapper>

  )
}

const OutWrapper = styled.div`
display: flex;
flex-direction: row;
height: 23rem;
width: 100%;
position: relative;
`;
const OutfitWrapper = styled.div`
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
font-size: 3rem;
background: none;
border: none;
color: grey;
`;

const LeftButtonWrapper = styled.div`
position: absolute;
left:0;
top: 35%;
z-index: 10;
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
z-index: 10;

`

export default Outfit;
