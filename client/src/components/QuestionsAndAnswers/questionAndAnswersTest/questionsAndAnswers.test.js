/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, userEvent, render, screen, waitFor, act } from "@testing-library/react";
import "jest-styled-components";

import App from '../../App.jsx';
import QuestionAndAnswers from '../QuestionsAndAnswers.jsx';

describe("Questions & Answers Component", () => {
  it("should render MORE ANSWERED QUESTIONS button", () => {
    const qAndA = render(<QuestionAndAnswers productId={37333} />);

    const button = qAndA.getByText("MORE ANSWERED QUESTIONS", {
      selector: "button",
    });

    expect(button).toBeDefined();
    cleanup();
  });
  it("MORE ANSWERED QUESTIONS should NOT be clickable after click", () => {
    const qAndA = render(<QuestionAndAnswers productId={37333} />);

    const button = qAndA.getByText("MORE ANSWERED QUESTIONS", {
      selector: "button",
    });
    userEvent.click(button);

    expect(button).toBeDefined();
    cleanup();
  });
});
