import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

function PurchaseOptions({ styles, activeStyle }, ref) {
  const sizeDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [outOfStock, setOutOfStock] = useState(false);

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
    if (sizes.length === 0) {
      setOutOfStock(true);
      return;
    }
    return skus.map((sku) => <option value={sku}>{styles[activeStyle].skus[sku].size}</option>);
  }

  function quantitySelector() {
    if (sizeDropdownRef.current.options[sizeDropdownRef.current.options.selectedIndex].text === 'Select Size'
      || sizeDropdownRef.current.options[sizeDropdownRef.current.options.selectedIndex].text === 'Out of Stock') {
      return <option>-</option>;
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
    font-size: calc(2vh + 1pt);
    border-width: calc(.3vh + 2px);
    border-color: black;
    padding: calc(.3vh + 2px);
    margin: calc(.3vh + 2px);
    `;

  const AddButton = styled.button`
    font-size: calc(2vh + 1pt);
    border-width: calc(.3vh + 2px);
    border-color: black;
    padding: calc(.3vh + 2px);
    margin: calc(.3vh + 2px);
    background-color: white;
    :hover {
      background-color: lightgrey;
      cursor: pointer;
    }
    `;

  const selectStyle = {
    'border-width': "calc(.3vh + 2px)",
    'border-color': 'black',
    padding: "calc(.3vh + 2px)",
    margin: "calc(.3vh + 2px)",
    'background-color': 'white',
    'font-size': "calc(2vh + 1pt)",
  };

  return (
    <div style={{ 'margin-top': '3vh' }}>
      <form onSubmit={completePurchase}>
        {styles && outOfStock
          ? <select style={selectStyle} required disabled id="sizeDropdown" ref={sizeDropdownRef}>
            <option value="">Out of Stock</option>
          </select>
          : <select style={selectStyle} required id="sizeDropdown" ref={sizeDropdownRef} onChange={changeSelectedSize}>
            <option value="">Select Size</option>
            {styles && optionGenerator()}
          </select>}
        {styles && (sizeDropdownRef.current.options[sizeDropdownRef.current.options.selectedIndex].text === 'Select Size'
          || sizeDropdownRef.current.options[sizeDropdownRef.current.options.selectedIndex].text === 'Out of Stock')
          ? <DropDown required disabled>
            {styles && quantitySelector()}
          </DropDown>
          : <DropDown required>
            {styles && quantitySelector()}
          </DropDown>}
        <br />
        {outOfStock ? null : <AddButton type="submit">Add to Cart</AddButton>}
      </form>
    </div>
  );
}

export default forwardRef(PurchaseOptions);
