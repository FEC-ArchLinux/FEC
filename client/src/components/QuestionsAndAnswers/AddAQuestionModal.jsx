/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const questionModal = {
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// const modalContent
function AddAQuestionModal({ showAddAQuestionModal, setShowAddAQuestionModal }) {
  const productName = "[Product Name Goes Here]";
  return (
    <div className="questionModal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="questionModalTitle">Ask a Question</h4>
          <h5 className="questionModalSubtitle">{`About the ${productName}`}</h5>
        </div>
        <div className="modal-body">
          <div>
            <label htmlFor="questionInput">
              *Question:
              <textarea
                type="text"
                id="questionInput"
                name="question"
                maxLength="1000"
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
                type="text"
                name="nickname"
                id="questoinEmailInput"
              />
              <div>
                <small>
                  For authentication reasons, you will not be emailed
                </small>
              </div>
            </label>
          </div>
        </div>
        <div className="modal-footer">
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
