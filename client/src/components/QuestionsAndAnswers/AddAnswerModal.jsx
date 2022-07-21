import React, { useState } from "react";
import axios from "axios";
import GH_TOKEN from "../../../../token.js";
import AnswerPictureList from "./AnswerPictureList.jsx";

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

function AddAnswerModal({ showAddAnswerModal, setShowAddAnswerModal, questionId }) {
  const [submit, setSubmit] = useState(false);
  const [answerValues, setAnswerValues] = useState({
    answer: '',
    nickname: '',
    email: '',
    photos: [],
  });
  const addAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionId}/answers/`;

  function handleAnswerInputChange(event) {
    event.persist();
    setAnswerValues((answerValue) => ({
      ...answerValues,
      answer: event.target.value,
    }));
  }
  function handleNicknameInputChange(event) {
    event.persist();
    setAnswerValues((answerValue) => ({
      ...answerValues,
      nickname: event.target.value,
    }));
  }
  function handleEmailInputChange(event) {
    event.persist();
    setAnswerValues((answerValue) => ({
      ...answerValues,
      email: event.target.value,
    }));
  }
  function handlePhotosInputChange(event) {
    event.persist();
    setAnswerValues((answerValue) => ({
      ...answerValues,
      photos: event.target.value,
    }));
  }

  const addAnswerParameters = {
    body: answerValues.answer,
    name: answerValues.nickname,
    email: answerValues.email,
    photos: answerValues.photos,
  };
  const addAnswerConfig = {
    method: 'post',
    url: addAnswerURL,
    headers: {
      Authorization: GH_TOKEN,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(addAnswerParameters),
  };

  function submitAnswer(e) {
    // console.log(e);
    // console.log(addAnswerConfig);
    if (!submit) {
      return;
    }
    axios(addAnswerConfig)
      .then((data) => {
        console.log(data);
        setShowAddAnswerModal(false);
        setSubmit(false);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div id="answerModal"
      style={answerModal}
      onClick={(event) => {
        if (event.target.id === "answerModal") {
          setShowAddAnswerModal(false);
        }
      }}
    >
      <div style={modalContent}>
        <div style={modalHeader}>
          <h3 className="AnswerModalTitle">Answer a Question</h3>
        </div>
        <div style={modalBody}>
          <form
            action=""
            onSubmit="return false;"
            method="dialog"
          >
            <div>
              <label htmlFor="answerInput">
                *Answer:
                <textarea
                  type="text"
                  id="answerInput"
                  name="answer"
                  value={answerValues.answer}
                  maxLength="1000"
                  required="required"
                  onChange={handleAnswerInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="answerNicknameInput">
                *Nickname:
                <input
                  type="text"
                  id="quesitonNicknameInput"
                  name="nickname"
                  value={answerValues.nickname}
                  placeholder="Example: jack543!"
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
                  id="answerEmailInput"
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
                <input
                  type="button"
                  name="photos"
                  value="Add Photos"
                  id="answerPhotoInput"
                  onClick={handlePhotosInputChange}
                />
                <div>
                  <AnswerPictureList answerPictureList={answerValues.Photos} />
                </div>
              </label>
            </div>

            <div style={modalFooter}>
              <button
                type="button"
                onClick={() => setShowAddAnswerModal(false)}
              >
                close
              </button>
              <input
                type="submit"
                value="submit"
                // url={addAnswerURL}
                onClick={() => {
                  setSubmit(true);
                  submitAnswer();
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAnswerModal;
