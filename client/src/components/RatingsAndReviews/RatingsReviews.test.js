/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
// import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import Enzyme, { shallow } from 'enzyme';
import ReviewList from './ReviewList.jsx';

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('ReviewList - Add Reviews Button', () => {
  it('should render button', () => {
    const reviewList = render(<ReviewList />);

    const button = reviewList.getByText('Add a Review', {
      selector: 'button',
    });

    expect(button).toBeDefined();
  });
});
