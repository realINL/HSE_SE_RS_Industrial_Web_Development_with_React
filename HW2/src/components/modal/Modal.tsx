import React from 'react';
import './Modal.css';
import '../productBigCard/ProductBigCard';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {content}
      </div>    
    </div>
  );
};

export default Modal;
