/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
// import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import 'jest-styled-components';
// import Enzyme, { shallow } from 'enzyme';
import Overview from '../Overview.jsx';
import ProductDescription from '../ProductDescription.jsx';

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
    cleanup();
  });
});

describe('Overview - Add to Cart Button', () => {
  it('should render button', () => {
    const overview = render(<Overview productId={37311} />);

    const button = overview.getByText('Add to Cart', {
      selector: 'button',
    });

    expect(button).toBeDefined();
    cleanup();
  });
});

describe('Product Description - Slogan', () => {
  it('should render slogan from data', () => {
    const productInfo = { id: 37311, campus: "hr-rfe", name: "Camo Onesie", slogan: "Blend in to your crowd", description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.", category: "Jackets", default_price: "140.00", created_at: "2021-08-13T14:37:33.145Z", updated_at: "2021-08-13T14:37:33.145Z", features: [{ feature: "Fabric", value: "Canvas" }, { feature: "Buttons", value: "Brass" }] };

    const description = render(<ProductDescription productInfo={productInfo} />);

    const slogan = description.getByText("Blend in to your crowd").textContent;

    expect(slogan).toBe("Blend in to your crowd");
    cleanup();
  });
});

describe('Image Gallery - Down Arrow', () => {
  it('should appear when there are 7+ images for a product', async () => {
    const overview = render(<Overview productId={37318} />);

    await waitFor(() => {
      const downArrow = screen.getByText("⇩", {
        selector: 'button',
      });
      expect(downArrow).toHaveStyleRule('display', 'flex');
    });
    cleanup();
  });

  it('should not appear when there are <= 7 images for a product', async () => {
    const overview = render(<Overview productId={37311} />);

    await waitFor(() => {
      const downArrow = screen.getByText("⇩", {
        selector: 'button',
      });
      expect(downArrow).toHaveStyleRule('display', 'none');
    });
    cleanup();
  });
});

describe('Style Selector - Select Style', () => {
  it('should change active style when a style is clicked', async () => {
    const overview = render(<Overview productId={37314} />);

    await waitFor(() => {
      const secondStyleImage = screen.getByAltText("Olive Green", {
        selector: 'img',
      });
      fireEvent.click(secondStyleImage);
      const firstGalleryImage = screen.getByAltText("Olive Green 0", {
        selector: 'img',
      });
      expect(firstGalleryImage).toBeDefined();
    });
    cleanup();
  });
});

describe('Big Image - Select Image Gallery', () => {
  it('should change to given big image when clicked', async () => {
    const overview = render(<Overview productId={37314} />);

    await waitFor(() => {
      const secondImage = screen.getByAltText("Black 1", {
        selector: 'img',
      });
      fireEvent.click(secondImage);
      const bigImage = screen.getByTestId("big-image", {
        selector: 'div',
      });
      expect(bigImage).toHaveStyleRule("background-image", "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)");
    });
    cleanup();
  });
});

describe('Purchase Options - Select Size', () => {
  it('should display "Out of Stock" when there are no products in inventory', async () => {
    const overview = render(<Overview productId={37312} />);

    await waitFor(() => {
      const dropDown = screen.getByText("Out of Stock", {
        selector: 'option',
      });
      expect(dropDown).toBeDefined();
    });
    cleanup();
  });

  it('should populate quantity selector when valid size is selected', async () => {
    const overview = render(<Overview productId={37311} />);

    await waitFor(() => {
      const dropDown = screen.getByTestId("sizeDropdown", {
        selector: 'select',
      });
      fireEvent.change(dropDown, {
        target: { value: "1281032" },
      });
      const quantityOption = screen.getByText("1", {
        selector: 'option',
      });
      expect(quantityOption).toBeDefined();
    });
    cleanup();
  });
});
