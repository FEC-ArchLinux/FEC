import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from 'react-icons/ai';
import OutfitCard from './outfitcard.jsx';


function AddOutfit({ mainProduct, placeHolderImage }) {

  const [outfitList, setOutfitList] = useState([]);
  //handle add outfit
  const handleAddOutfit = (mainProduct) => {
    const currentList = window.localStorage.getItem('outfitList');
    const currentListArray = JSON.parse(currentList);
    if (currentListArray === null) {
      const updatedArray = [...outfitList, mainProduct.toString()];
      setOutfitList(updatedArray);
      window.localStorage.setItem('outfitList', JSON.stringify(updatedArray));
    } else {
      if (!(currentListArray.includes(mainProduct.toString()))) {
        const updatedArray = [...outfitList, mainProduct.toString()];
        setOutfitList(updatedArray);
        window.localStorage.setItem('outfitList', JSON.stringify(updatedArray));
      }
    }
  }
  // GET outfit list
  const getOutfitList = () => {
    const initialOutfitList = window.localStorage.getItem('outfitList');
    const initialOutfitListArray = JSON.parse(initialOutfitList);
    setOutfitList(initialOutfitListArray);
  }
  // handle REMOVE outfit
  const handleRemove = (item) => {
    const currentList = window.localStorage.getItem('outfitList');
    const currentListArray = JSON.parse(currentList);
    const updatedArray = currentListArray.filter((id) => id !== JSON.stringify(item));
    setOutfitList(updatedArray);
    window.localStorage.setItem('outfitList', JSON.stringify(updatedArray));
  }

  useEffect(() => {
    getOutfitList();
  }, []);

  return (
    <>
      <ButtonWrapper onClick={() => handleAddOutfit(mainProduct)}>
        <ButtonContainer>
          <AiOutlinePlus />
        </ButtonContainer></ButtonWrapper>

      {outfitList && outfitList.map((item) => {
        return (
          <div>
            <OutfitCard
              item={parseInt(item)}
              placeHolderImage={placeHolderImage}
              handleRemove={handleRemove}
            />
          </div>
        )
      })}
    </>

  );
}

const ButtonWrapper = styled.div`
position: relative;
height: 100%;
width: 15vw;
flex-shrink: 0;
margin: 0px 40px;
background: rgba(255,255,255,0.1);
&:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  bottom-border: 0px;
  cursor: pointer;
}
`
const ButtonContainer = styled.div`
position: relative;
font-size: 26px;
top: 48%;
left: 48%;
flex-shrink: 0;
&:hover {
  color: gold;
}
`;

export default AddOutfit;
