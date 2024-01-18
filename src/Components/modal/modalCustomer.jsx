import React from "react";
import ReactDOM from "react-dom";
import "./modalCustomer.css";

const ModalCustomer = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>,
    document.body
  );
};

export default ModalCustomer;
