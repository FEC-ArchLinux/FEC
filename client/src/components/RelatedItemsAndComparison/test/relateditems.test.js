/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import RelatedItemsAndComparison from "../RelatedItemsAndComparison.jsx";

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('RelatedItemsAndComparison to have div', () => {
  it('should render a div', async () => {
    const productId = 37311;
    const relatedItems = render(<RelatedItemsAndComparison productId={productId} />);

    await waitFor(() => {
      const element = relatedItems.getByText('RELATED PRODUCTS');
      expect(element).toBeDefined();
    });
  });
});