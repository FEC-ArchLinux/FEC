import React from "react";

function AddAQuestionModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Ask a Question</h4>
        </div>
        <div className="modal-body">
          question details go here
        </div>
        <div className="modal-footer">
          <button type="button">close</button>
        </div>
      </div>
    </div>
  )
}