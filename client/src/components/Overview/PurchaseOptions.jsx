import React, { useState, useRef } from 'react';

function PurchaseOptions({ styles, activeStyle }) {
  const sizeDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState('Select Size');

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

  function completePurchase() {
    event.preventDefault();
  }

  return (
    <>
      <h3>Purchase Options</h3>
      <form onSubmit={completePurchase}>
        <label>Size:
          <select required ref={sizeDropdownRef} onChange={changeSelectedSize}>
            <option value="">Select Size</option>
            {styles && optionGenerator()}
          </select>
        </label>
        <label>Quantity:
          <select required>
            {styles && quantitySelector()}
          </select>
        </label>
        <br />
        <button type="submit">Add to Cart</button>
      </form>
    </>
  );
}

export default PurchaseOptions;
