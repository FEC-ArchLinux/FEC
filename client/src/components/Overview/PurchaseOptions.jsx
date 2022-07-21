import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import styled from "styled-components";
import axios from "axios";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from "react-share";

function PurchaseOptions(
  { styles, activeStyle, outOfStock, setOutOfStock, GH_TOKEN },
  ref
) {
  const sizeDropdownRef = useRef();
  const quantityDropdownRef = useRef();
  const [selectedSize, setSelectedSize] = useState("Select Size");

  // pass up function to reset selected size when another style is selected
  useImperativeHandle(ref, () => ({
    resetSelectedSize: () => {
      setSelectedSize("Select Size");
      sizeDropdownRef.current !== undefined
        ? (sizeDropdownRef.current.options.selectedIndex = 0)
        : null;
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
      return 0;
    }
    return skus.map((sku) => (
      <option value={sku}>{styles[activeStyle].skus[sku].size}</option>
    ));
  }

  function quantitySelector() {
    if (selectedSize === "Select Size" || outOfStock) {
      return <option>-</option>;
    }
    const options = [];
    if (styles[activeStyle].skus[selectedSize]) {
      if (styles[activeStyle].skus[selectedSize].quantity > 15) {
        for (let i = 1; i <= 15; i++) {
          options.push(<option>{i}</option>);
        }
      } else {
        for (
          let i = 1;
          i <= styles[activeStyle].skus[selectedSize].quantity;
          i++
        ) {
          options.push(<option>{i}</option>);
        }
      }
      return options.map((option) => option);
    }
  }

  const DropDown = styled.select`
    font-size: calc(2vh + 1pt);
    border-width: calc(0.3vh + 2px);
    border-color: black;
    padding: calc(0.3vh + 2px);
    margin: calc(0.3vh + 2px);
    cursor: pointer;
  `;

  const AddButton = styled.button`
    font-size: calc(2vh + 1pt);
    border-width: calc(0.3vh + 2px);
    border-color: black;
    padding: calc(0.3vh + 2px);
    margin: calc(0.3vh + 2px);
    background-color: white;
    cursor: pointer;
    :hover {
      background-color: lightgrey;
    }
  `;

  const selectStyle = {
    "border-width": "calc(.3vh + 2px)",
    "border-color": "black",
    padding: "calc(.3vh + 2px)",
    margin: "calc(.3vh + 2px)",
    "background-color": "white",
    "font-size": "calc(2vh + 1pt)",
    cursor: "pointer",
  };

  function sizeDropdown() {
    const sizes = optionGenerator();
    if (sizes === 0) {
      setOutOfStock(true);
      return (
        <select
          style={selectStyle}
          required
          disabled
          data-testid="sizeDropdown"
          ref={sizeDropdownRef}
        >
          <option value="">Out of Stock</option>
        </select>
      );
    }
    setOutOfStock(false);
    return (
      <select
        style={selectStyle}
        required
        data-testid="sizeDropdown"
        ref={sizeDropdownRef}
        onChange={changeSelectedSize}
      >
        <option value="">Select Size</option>
        {sizes}
      </select>
    );
  }

  function completePurchase() {
    event.preventDefault();
    // for (let i = 0; i < Number(quantityDropdownRef.current.value); i++) {
    //   axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart', {
    //     sku_id: Number(sizeDropdownRef.current.value),
    //   }, {
    //     headers: {
    //       authorization: GH_TOKEN,
    //     },
    //   })
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));
    // }

    const postPromise = () =>
      axios.post(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart",
        {
          sku_id: Number(sizeDropdownRef.current.value),
        },
        {
          headers: {
            authorization: GH_TOKEN,
          },
        }
      );

    const promiseArray = Array(Number(quantityDropdownRef.current.value));
    promiseArray.fill(postPromise);
    Promise.all(
      promiseArray.map((promise) =>
        promise().catch((err) => console.error(err))
      )
    )

      .then(() => {
        alert(
          `${quantityDropdownRef.current.value} of item ${sizeDropdownRef.current.value} added to your cart.`
        );
        setSelectedSize("Select Size");
        sizeDropdownRef.current.options.selectedIndex = 0;
      })
      .catch((err) => console.error(err));
  }

  return (
    <div style={{ "margin-top": "3vh" }}>
      <form onSubmit={completePurchase}>
        {styles && sizeDropdown()}
        {styles &&
          (selectedSize === "Select Size" || outOfStock ? (
            <DropDown required disabled>
              {styles && quantitySelector()}
            </DropDown>
          ) : (
            <DropDown ref={quantityDropdownRef} required>
              {styles && quantitySelector()}
            </DropDown>
          ))}
        <br />
        {outOfStock ? null : <AddButton type="submit">Add to Cart</AddButton>}
      </form>
      <p style={{ "font-size": "calc(2vh + 1pt)", "margin-bottom": 0 }}>
        Share:
      </p>
      <FacebookShareButton url="https://github.com/FEC-ArchLinux/FEC">
        <FacebookIcon size={window.innerWidth / 45} round />
      </FacebookShareButton>
      <TwitterShareButton url="https://github.com/FEC-ArchLinux/FEC">
        <TwitterIcon size={window.innerWidth / 45} round />
      </TwitterShareButton>
      <PinterestShareButton url="https://github.com/FEC-ArchLinux/FEC">
        <PinterestIcon size={window.innerWidth / 45} round />
      </PinterestShareButton>
    </div>
  );
}

export default forwardRef(PurchaseOptions);
