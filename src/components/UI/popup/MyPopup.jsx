import React from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import './MyPopup.css';

function MyPopup({ title, children, btnText, isOpen, onClose }) {

  return (
    <section className={isOpen ? `popup popup_active` : `popup`}>
      <div className="popup__container">
      <button onClick={onClose} className="popup__close"></button>
        <form className="form">
          <h2 className="form__title">{title}</h2>
          <MyInput 
            type="text" 
            placeholder="Название" 
            className="form__input"
            minLength="2"
          />
          <MyInput 
            type="text" 
            placeholder="Описание" 
            className="form__input"
            minLength="5"
          />
          {children}
          <MyButton className="form__btn">{btnText}</MyButton>
        </form>
      </div>
    </section>
  )
}

export default MyPopup;