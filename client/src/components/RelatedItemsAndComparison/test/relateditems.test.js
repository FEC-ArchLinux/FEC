/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import {render, screen} from "@testing-library/react";
import RelatedItemsAndComparison from "../RelatedItemsAndComparison.jsx";

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('RelatedItemsAndComparison to have div', () => {
  it('should render a div', () => {
    const relatedItems = render(<RelatedItemsAndComparison />);

    const element = relatedItems.getByText('Related items', {
      selector: 'div',
    });

    expect(element).toBeDefined();
});
})