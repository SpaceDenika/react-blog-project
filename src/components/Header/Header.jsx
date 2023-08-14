import React from "react";
import './Header.css';
import MyButton from "../UI/button/MyButton";


function Header({ onPostForm }) {

  return (
    <header className="header">
      <div className="header__container">
        <p className="header__title">Posts</p>
        <MyButton onClick={onPostForm}>Создать пост</MyButton>
      </div>
    </header>
  )
}

export default Header;
