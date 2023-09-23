import React from "react";
import './MyPopup.css';

function MyPopup({ title, children, isOpen, onClose, onSubmit }) {

  return (
    <section 
      className={isOpen ? `popup popup_active` : `popup`}
      onClick={onClose}
    >
      <div 
        className="popup__container"
        onClick={(e) => e.stopPropagation()}  
      >
      <button onClick={onClose} className="popup__close"></button>
        <form onSubmit={onSubmit} className="form">
          <h2 className="form__title">{title}</h2>
          {children}
        </form>
      </div>
    </section>
  )
}

export default MyPopup;