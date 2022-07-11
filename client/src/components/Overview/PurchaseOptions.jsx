import React, { useState, useRef } from 'react';

function PurchaseOptions({ styles, activeStyle }) {
  const sizeDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState('Select Size');

  function changeSelectedSize() {
    setSelectedSize(sizeDropdownRef.current.value);
  }

  if (styles) {
    const sizes = [];
    const skus = Object.keys(styles[activeStyle].skus);
    for (const sku of skus) {
      if (styles[activeStyle].skus[sku].quantity > 0) {
        sizes.push(sku);
      }
    }

    const quantitySelector = () => {
      if (selectedSize === 'Select Size') {
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
      return (
        options.map((option) => option)
      );
    };

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
