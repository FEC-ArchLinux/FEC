import React, { useState } from "react";
import styled from "styled-components";
import AddAnswerModal from "./AddAnswerModal.jsx";

function AddAnswer({ questionId }) {
  const [showAddAnswerModal, setShowAddAnswerModal] = useState(false);

  if (showAddAnswerModal) {
    return (
      <AddAnswerModal
        questionId={questionId}
        showAddAnswerModal={showAddAnswerModal}
        setShowAddAnswerModal={setShowAddAnswerModal}
      />
    );
  }
  return (
    <LinkButton
      type="button"
      onClick={() => setShowAddAnswerModal(true)}
    >
      Add Answer
    </LinkButton>
  );
}

const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  fontSize: medium;
  color: grey;
  text-decoration: none;
  &:hover {
    fontStyle: bold;
    text-decoration: underline;
  }
`;

export default AddAnswer;
