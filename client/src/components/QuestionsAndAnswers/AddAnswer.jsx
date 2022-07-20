import React, { useState } from "react";
import AddAnswerModal from "./AddAnswerModal.jsx";

const linkButton = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: 'medium',
  textDecoration: 'underline',
};

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
    <button
      type="button"
      style={linkButton}
      onClick={() => setShowAddAnswerModal(true)}
    >
      Add Answer
    </button>
  );
}

export default AddAnswer;
