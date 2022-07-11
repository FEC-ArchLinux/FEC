import React, { useState, useRef } from 'react';

function PurchaseOptions({ styles, activeStyle }) {
  const sizeDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState('Select Size');

  function changeSelectedSize() {
    setSelectedSize(sizeDropdownRef.current.value);
  }

  if (styles) {
    let sizes = [];
    let skus = Object.keys(styles[activeStyle].skus);
    for (let sku of skus) {
      if (styles[activeStyle].skus[sku].quantity > 0) {
        sizes.push(sku);
      }
    }

    let quantitySelector = () => {
      if (selectedSize === 'Select Size') {
        return;
      }
      let options = [];
      if (styles[activeStyle].skus[selectedSize].quantity > 15) {
        for (let i = 0; i < 16; i++) {
          options.push(<option>{i}</option>);
        }
      } else {
        for (let i = 0; i < styles[activeStyle].skus[selectedSize].quantity; i++) {
          options.push(<option>{i}</option>);
        }
      }
      return (
        options.map((option) => option)
      );
    }

    return (
      <>
        <h3>Purchase Options</h3>
        <form>
          <label>Size:
            <select ref={sizeDropdownRef} onChange={changeSelectedSize}>
              <option>Select Size</option>
              {skus.map((sku) => <option value={sku}>{styles[activeStyle].skus[sku].size}</option>)}
            </select>
          </label>
          <label>Quantity:
            <select>
              {quantitySelector()}
            </select>
          </label>
          <br />
          <button type="button">Add to Cart</button>
        </form>
      </>
    );
  }
  return <p>Loading Purchase Options...</p>;
}

export default PurchaseOptions;
