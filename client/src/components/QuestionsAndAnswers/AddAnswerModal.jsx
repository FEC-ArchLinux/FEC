import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";

const answerModal = {
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

const addAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`;

function AddAnswerModal() {

  <div
    id="answerModal"
    style={answerModal}
    onClick={(event) => {
      if (event.target.id === "AnswerModal") {
        setShowAddAnswerModal(false);
      }
    }}
  >
    <div style={modalContent}>
      <div style={modalHeader}>
        <h3 className="AnswerModalTitle">Answer A Question</h3>
      </div>
      <div style={modalBody}>
        <form
          action=""
          method="post"
        >
          <div>
            <label htmlFor="answerInput">
              *Answer:
              <textarea
                type="text"
                id="answerInput"
                name="answer"
                placeholder="Why did you like the product or not?"
                value={answerValues.answer}
                maxLength="1000"
                required="required"
                onChange={handleAnswerInputChange}
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
                value={answerValues.nickname}
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
                maxLength="60"
                value={answerValues.email}
                id="questoinEmailInput"
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
          <div>
            <label htmlFor="photos">
              *photos:
              <input
                type="photos"
                name="photos"
                value={answerValues.Photos}
                id="answerPhotoInput"
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
              onClick={submitQuestion()}
            >
            </input>
          </div>
        </form>
      </div>
    </div>
  </div>
}