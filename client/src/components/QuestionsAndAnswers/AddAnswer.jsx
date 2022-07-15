import React from "react";

function AddAnswer() {
  const linkButton = {
    'background-color': 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    'text-decoration': 'underline',
    display: 'inline-flex',
    align: "bottom",
    // margin: '0',
    padding: '17px 1vw 0 1vw',
  };
  const inline = {
    display: "inline-flex",
    padding: '0 10px 0',
    // height: '30px',
  };

  return (
    <button
      type="button"
      style={inline}
      style={linkButton}
    >
      Add Answer
    </button>
  );
}

export default AddAnswer;
