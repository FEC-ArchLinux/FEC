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
import PercentRecommend from './PercentRecommend.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import AddReview from './AddReview.jsx';

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
    const test = 37311;
    const reviewList = render(<ReviewList productId={test} />);

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
      const button = screen.getByText('MORE REVIEWS', {
        selector: 'button',
      });
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
      const button = screen.getByText('MORE REVIEWS', {
        selector: 'button',
      });
      fireEvent.click(button);
      fireEvent.click(button);
    });

    const reviewContainer = await screen.getAllByText("Helpful", { exact: false });
    expect(reviewContainer.length).toBe(7);
    cleanup();
  });
});

describe('render percent recommend module', () => {
  it('should render percentage of reviews', async () => {
    const reviewlist = render(<PercentRecommend />);

    await waitFor(() => {
      const span = screen.getByText('%', { exact: false });
      expect(span.innerHTML).toBe("% of reviews recommend this product");
    });
    cleanup();
  });
});

describe('Render and Test ProductBreakdown Component', () => {
  it('should render marker', async () => {
    const { findAllByTestId } = render(<ProductBreakdown />);
    await waitFor(() => {
      const span = screen.findAllByTestId('marker', { exact: false })
        .then((spans) => {
          expect(spans.innerHTML).toBe("🔻");
        });
    });
    cleanup();
  });
  it('should render whole breakdown', async () => {
    const { findAllByTestId } = render(<ProductBreakdown />);
    await waitFor(() => {
      const div = screen.findAllByTestId('product-breakdown', { exact: false })
        .then((divs) => {
          expect(divs).toBeDefined();
        });
    });
    cleanup();
  });
});

// describe('Render and Test AddReview Component', () => {
//   it('should render starfilters', async () => {
//     const addReview = render(<AddReview />);
//     const exitButton = reviewList.getByText('Exit', { exact: false });

//     expect(exitButton).toBeDefined();
//     cleanup();
//   });
// });
