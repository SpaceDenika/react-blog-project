import React from "react";
import './Header.css';
import MyButton from "../UI/button/MyButton";


function Header({ onPostForm }) {

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Posts</h1>
        <MyButton onClick={() => onPostForm(true)}>Создать пост</MyButton>
      </div>
    </header>
  )
}

export default Header;
