import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

function PurchaseOptions({ styles, activeStyle }, ref) {
  const sizeDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState('Select Size');

  // pass up function to reset selected size when another style is selected
  useImperativeHandle(ref, () => ({
    resetSelectedSize: () => {
      setSelectedSize('Select Size');
      sizeDropdownRef.current.options.selectedIndex = 0;
    },
  }));

  function changeSelectedSize() {
    setSelectedSize(sizeDropdownRef.current.value);
  }

  function optionGenerator() {
    const sizes = [];
    const skus = Object.keys(styles[activeStyle].skus);
    for (const sku of skus) {
      if (styles[activeStyle].skus[sku].quantity > 0) {
        sizes.push(sku);
      }
    }
    return skus.map((sku) => <option value={sku}>{styles[activeStyle].skus[sku].size}</option>);
  }

  function quantitySelector() {
    if (sizeDropdownRef.current.options[sizeDropdownRef.current.options.selectedIndex].text === 'Select Size') {
      return;
    }
    const options = [];
    if (styles[activeStyle].skus[selectedSize]) {
      if (styles[activeStyle].skus[selectedSize].quantity > 15) {
        for (let i = 1; i <= 15; i++) {
          options.push(<option>{i}</option>);
        }
      } else {
        for (let i = 1; i <= styles[activeStyle].skus[selectedSize].quantity; i++) {
          options.push(<option>{i}</option>);
        }
      }
      return options.map((option) => option);
    }
  }

  function completePurchase() {
    event.preventDefault();
  }

  const DropDown = styled.select`
    font-size: large;
    border-width: 5px;
    border-color: black;
    padding: 5px;
    margin: 5px;
    &:hover {
      background-color: lightgray;
    }`;

  const AddButton = styled.button`
    font-size: large;
    border-width: 5px;
    border-color: black;
    padding: 5px;
    margin: 5px;
    background-color: white;
    &:hover {
      background-color: lightgray;
    }`;

  return (
    <div>
      <h3>Purchase Options</h3>
      <form onSubmit={completePurchase}>
        <DropDown required ref={sizeDropdownRef} onChange={changeSelectedSize}>
          <option value="">Select Size</option>
          {styles && optionGenerator()}
        </DropDown>
        <DropDown required>
          {styles && quantitySelector()}
        </DropDown>
        <br />
        <AddButton type="submit">Add to Cart</AddButton>
      </form>
    </div>
  );
}

export default forwardRef(PurchaseOptions);
