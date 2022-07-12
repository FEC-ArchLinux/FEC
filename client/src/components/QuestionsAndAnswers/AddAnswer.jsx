import React from "react";

const linkButton = {
  'background-color': 'transparent',
  border: 'none',
  cursor: 'pointer',
  'text-decoration': 'underline',
  display: 'inline',
  margin: '0',
  padding: '0',
};

function AddAnswer() {
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
