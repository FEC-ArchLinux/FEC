import React from "react";

function AddAnswer() {
  const linkButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'medium',
    textDecoration: 'underline',
  };

  return (
    <button
      type="button"
      style={linkButton}
    >
      Add Answer
    </button>
  );
}

export default AddAnswer;
