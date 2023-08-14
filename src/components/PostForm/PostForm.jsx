import React from "react";
import MyPopup from "../UI/popup/MyPopup";

function PostForm({ isOpen, onClose }) {

  return (
    <MyPopup
      title="Создание поста"
      btnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      >
      <textarea type="text" className="form__input form__input_type_body" placeholder="Текст поста" minLength="5" maxLength="400" />
    </MyPopup>
  )
}

export default PostForm;