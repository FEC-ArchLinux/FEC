/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";

const questionModal = {
  position: "fixed",
  left: "0",
  top: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContent = {
  width: "50vw",
  backgroundColor: "white",
};

const modalHeader = {
  padding: "10px",
};

const modalFooter = {
  padding: "10px",
};

const modalBody = {
  padding: "10px",
  borderTop: "10px solid #eee",
  borderBottom: "10px solid #eee",
};

function AddAQuestionModal({ showAddAQuestionModal, setShowAddAQuestionModal, productId }) {
  const [submit, setSubmit] = useState(false);
  const [questionValues, setValues] = useState({
    question: '',
    nickname: '',
    email: '',
  });
  const addQuestionURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/';

  const handleQuestionInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      question: event.target.value,
    }));
  };
  const handleNicknameInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      nickname: event.target.value,
    }));
  };
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      email: event.target.value,
    }));
  };

  // I didn't want to do another HTTP request for the title...
  const productName = document.body.children[0].children[1].children[0].children[0].children[1].children[0].children[4].textContent;
  const questionParameters = {
    product_id: productId,
    body: questionValues.question,
    name: questionValues.nickname,
    email: questionValues.email,
  };

  const addQuestionConfig = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
    headers: {
      Authorization: GH_TOKEN,
      'Content-Type': 'application/json',
    },
    data: questionParameters,
  };

  const submitQuestion = (e) => {
    if (!submit) {
      return;
    }
    axios(addQuestionConfig)
      .then((data) => {
        console.log((data));
        setShowAddAQuestionModal(false);
        setSubmit(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    // click outside of the modalContent div exits the modal
    <div
      id="questionModal"
      style={questionModal}
      onClick={(event) => {
        if (event.target.id === "questionModal") {
          setShowAddAQuestionModal(false);
        }
      }}
    >
      <div style={modalContent}>
        <div style={modalHeader}>
          <h3 className="questionModalTitle">Ask a Question</h3>
          <h4 className="questionModalSubtitle">{`About the ${productName}`}</h4>
        </div>
        <div style={modalBody}>
          <form
            action=""
            onSubmit="return false;"
            method="dialog"
          >
            <div>
              <label htmlFor="questionInput">
                *Question:
                <textarea
                  type="text"
                  id="questionInput"
                  name="question"
                  placeholder="Why did you like the product or not?"
                  value={questionValues.question}
                  maxLength="1000"
                  required="required"
                  onChange={handleQuestionInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="questionNicknameInput">
                *Nickname:
                <input
                  type="text"
                  id="quesitonNicknameInput"
                  name="nickname"
                  value={questionValues.nickname}
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  required="required"
                  onChange={handleNicknameInputChange}
                />
                <div>
                  <small>
                    “For privacy reasons, do not use your full name or email address
                  </small>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="email">
                *Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Why did you like the product or not?"
                  value={questionValues.email}
                  id="questionnEmailInput"
                  required="required"
                  onChange={handleEmailInputChange}
                />
                <div>
                  <small>
                    For authentication reasons, you will not be emailed
                  </small>
                </div>
              </label>
            </div>
            <div style={modalFooter}>
              <button
                type="button"
                onClick={() => setShowAddAQuestionModal(false)}
              >
                close
              </button>
              <input
                type="submit"
                value="submit"
                // url={addQuestionURL}
                onClick={() => {
                  setSubmit(true);
                  submitQuestion();
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAQuestionModal;
