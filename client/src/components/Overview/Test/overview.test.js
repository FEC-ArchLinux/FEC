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

describe('Image Gallery - Up Arrow', () => {
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
