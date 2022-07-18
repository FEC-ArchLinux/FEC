import React, { useState } from "react";
import AddAQuestionModal from "./AddAQuestionModal.jsx";

const boxButtonStyle = {
  margin: "0 1vw 1vw 0",
  fontSize: "large",
  fontStyle: "bold",
  border: "solid",
  borderWidth: "1px",
  height: '40px',
  cursor: 'pointer',
  backgroundColor: 'white',
};

function AddAQuestion() {
  const [showAddAQuestionModal, setShowAddAQuestionModal] = useState(false);
  if (showAddAQuestionModal) {
    return (
      <AddAQuestionModal
        AddAQuestionModal={AddAQuestionModal}
        setShowAddAQuestionModal={setShowAddAQuestionModal}
      />
    );
  }
  return (
    <button
      type="button"
      style={boxButtonStyle}
      onClick={() => setShowAddAQuestionModal(true)}
    >
      ADD A QUESTION ➕
    </button>
  );
}

export default AddAQuestion;
