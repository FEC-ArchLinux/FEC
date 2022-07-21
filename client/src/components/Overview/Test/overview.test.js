/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from "react";
// import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
// import Enzyme, { shallow } from 'enzyme';
import Overview from "../Overview.jsx";
import App from "../../App.jsx";
import ProductDescription from "../ProductDescription.jsx";

describe("Overview - Add to Cart Button", () => {
  it("should render button", () => {
    render(<Overview productId={37311} />);

    const button = screen.getByText("Add to Cart", {
      selector: "button",
    });

    expect(button).toBeDefined();
  });
});

describe("Product Description - Slogan", () => {
  it("should render slogan from data", () => {
    const productInfo = {
      id: 37311,
      campus: "hr-rfe",
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      description:
        "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      category: "Jackets",
      default_price: "140.00",
      created_at: "2021-08-13T14:37:33.145Z",
      updated_at: "2021-08-13T14:37:33.145Z",
      features: [
        { feature: "Fabric", value: "Canvas" },
        { feature: "Buttons", value: "Brass" },
      ],
    };

    render(<ProductDescription productInfo={productInfo} />);

    const slogan = screen.getByText("Blend in to your crowd").textContent;

    expect(slogan).toBe("Blend in to your crowd");
  });
});

describe("Image Gallery - Down Arrow", () => {
  it("should appear when there are 7+ images for a product", async () => {
    render(<Overview productId={37318} />);

    await waitFor(() => {
      const downArrow = screen.getByText("⇩", {
        selector: "button",
      });
      expect(downArrow).toHaveStyleRule("display", "flex");
    });
  });

  it("should not appear when there are <= 7 images for a product", async () => {
    render(<Overview productId={37311} />);

    await waitFor(() => {
      const downArrow = screen.getByText("⇩", {
        selector: "button",
      });
      expect(downArrow).toHaveStyleRule("display", "none");
    });
  });
});

describe("Style Selector - Select Style", () => {
  it("should change active style when a style is clicked", async () => {
    render(<Overview productId={37314} />);

    const secondStyleImage = await screen.findByAltText("Olive Green", {
      selector: "img",
    });
    userEvent.click(secondStyleImage);
    const firstGalleryImage = await screen.findByAltText("Olive Green 0", {
      selector: "img",
    });
    expect(firstGalleryImage).toBeDefined();
  });
});

describe("Big Image - Select Image Gallery", () => {
  it("should change to given big image when clicked", async () => {
    render(<Overview productId={37314} />);

    const secondImage = await screen.findByAltText("Black 1", {
      selector: "img",
    });
    userEvent.click(secondImage);
    await waitFor(() => {
      const bigImage = screen.getByTestId("big-image", {
        selector: "div",
      });
      expect(bigImage).toHaveStyleRule(
        "background-image",
        "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)"
      );
    });
  });
});

describe("Purchase Options - Select Size", () => {
  it('should display "Out of Stock" when there are no products in inventory', async () => {
    render(<Overview productId={37312} />);

    const dropDown = await screen.findByText("Out of Stock", {
      selector: "option",
    });
    expect(dropDown).toBeDefined();
  });

  it("should populate quantity selector when valid size is selected", async () => {
    render(<Overview productId={37311} />);

    const dropDown = await screen.findByTestId("sizeDropdown", {
      selector: "select",
    });
    userEvent.selectOptions(dropDown, ["1281032"]);
    const quantityOption = await screen.findByText("1", {
      selector: "option",
    });
    expect(quantityOption).toBeDefined();
  });
});

describe("App - Item Search", () => {
  it("should change to new", async () => {
    render(<App />);

    const search = screen.getByTestId("searchBar", {
      selector: "input",
    });
    await userEvent.type(search, "37318");
    const searchButton = screen.getByTestId("searchButton", {
      selector: "button",
    });
    userEvent.click(searchButton);
    await waitFor(
      () => {
        expect(screen.getByTestId("big-image")).toHaveStyleRule(
          "background-image",
          "url(https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
        );
      },
      { timeout: 5000 }
    );
  });
});
