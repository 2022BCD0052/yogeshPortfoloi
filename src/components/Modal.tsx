"use client"
// Modal.tsx
import React from 'react';
import ContactForm from './ContactForm';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
       
        <ContactForm onClose={onClose} />
    </div>
  );
};

export default Modal;
