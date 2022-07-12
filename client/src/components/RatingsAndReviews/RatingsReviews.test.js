/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Enzyme, { shallow } from 'enzyme';
import ReviewList from './ReviewList.jsx';

describe('ReviewList - More Reviews Button', () => {
  it('should render two reviews initially', () => {
    const reviewList = render(<ReviewList />);

    const button = reviewList.getByText('More Reviews', {
      selector: 'button',
    });

    expect(button).toBeDefined();
  });
});
