/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
// import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import Enzyme, { shallow } from 'enzyme';
import Overview from '../Overview.jsx';

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('ReviewList - Add Reviews Button', () => {
  it('should render button', () => {
    const overview = render(<Overview />);

    const button = overview.getByText('Add to Cart', {
      selector: 'button',
    });

    expect(button).toBeDefined();
  });
});
