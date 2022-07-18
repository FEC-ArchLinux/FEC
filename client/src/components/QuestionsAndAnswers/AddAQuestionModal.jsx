/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

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

// const modalContent
// wrap in forms onsubmit (required)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
function AddAQuestionModal({ showAddAQuestionModal, setShowAddAQuestionModal }) {
  const productName = "[Product Name Goes Here]";
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
          <h4 className="questionModalTitle">Ask a Question</h4>
          <h5 className="questionModalSubtitle">{`About the ${productName}`}</h5>
        </div>
        <div style={modalBody}>
          <div>
            <label htmlFor="questionInput">
              *Question:
              <textarea
                type="text"
                id="questionInput"
                name="question"
                maxLength="1000"
                required="required"
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
                placeholder="Example: jackson11!"
                maxLength="60"
                required="required"
              />
              <div>
                <small>
                  “For privacy reasons, do not use your full name or email address
                </small>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="questionEmailInput">
              *Email:
              <input
                type="email"
                name="nickname"
                id="questoinEmailInput"
                required="required"
              />
              <div>
                <small>
                  For authentication reasons, you will not be emailed
                </small>
              </div>
            </label>
          </div>
        </div>
        <div style={modalFooter}>
          <button
            type="button"
            onClick={() => setShowAddAQuestionModal(false)}
          >
            close
          </button>
          <button
            type="button"
            onClick={() => setShowAddAQuestionModal(false)}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAQuestionModal;
