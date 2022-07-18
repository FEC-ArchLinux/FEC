/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen, waitFor, act } from "@testing-library/react";
// import Enzyme, { shallow } from 'enzyme';
import ReviewList from './ReviewList.jsx';
import App from '../App.jsx';

describe('test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('Shoulder render app', () => {
  it('Initial App should render', () => {
    const app = render(<App />);

    const reviewlist = app.getByText('Ratings and Reviews', {
      selector: 'h3',
    });

    expect(reviewlist).toBeDefined();
    cleanup();
  });
});

describe('ReviewList - Add Reviews Button', () => {
  it('should render button', () => {
    const reviewList = render(<ReviewList />);

    const button = reviewList.getByText('Add a Review', { exact: false });

    expect(button).toBeDefined();
    cleanup();
  });
});

describe('render page after axios request', () => {
  it('more reviews button render once data loads', async () => {
    // jest.mock('./ReviewList.jsx');
    const test = 37311;
    const reviewlist = render(<ReviewList productId={test} />);

    await waitFor(() => {
      const button = screen.getByText('MORE REVIEWS');
      expect(button).toBeDefined();
    });
    cleanup();
  });

  it('more reviews button click should add reviews by two', async () => {
    // jest.mock('./ReviewList.jsx');
    const test = 37311;
    const reviewlist = render(<ReviewList productId={test} />);

    const initialCount = await screen.getAllByText("Helpful", { exact: false });
    expect(initialCount.length).toBe(1);

    await waitFor(() => {
      const button = screen.getByText('MORE REVIEWS');
      fireEvent.click(button);
      fireEvent.click(button);
    });

    const reviewContainer = await screen.getAllByText("Helpful", { exact: false });
    expect(reviewContainer.length).toBe(7);
    cleanup();
  });
});

// const { container } = render(<ReviewList productId={test} />);
// await waitFor(() => expect(screen.getByText("More Reviews")).toBeInTheDocument());

// fireEvent.click(button);
// const reviewContainer = screen.getByTitle("review-container");
// console.log(reviewContainer);

//   const reviewList = render(<ReviewList productId={37311} />);
//   const { container } = render(<ReviewList />);
//
//   console.log(reviewList);
//   console.log(button);

// const { container } = renderer.create(<ReviewList />);

// const tree = reviewList.toJSON();
// console.log(tree);

// fireEvent.click(button);

// console.log(ReviewContainer);
// expect(ReviewContainer.length).toBe(4);