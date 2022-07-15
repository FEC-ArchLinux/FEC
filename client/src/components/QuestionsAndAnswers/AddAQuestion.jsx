import React, { useState } from "react";

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
  return (
    <button
      type="button"
      style={boxButtonStyle}
      onClick={() => setShowAddAQuestionModal(!showAddAQuestionModal)}
    >ADD A QUESTION ➕</button>
  );
}

export default AddAQuestion;
