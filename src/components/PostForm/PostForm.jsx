import React, { useState } from "react";
import MyPopup from "../UI/popup/MyPopup";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

function PostForm({ isOpen, onClose, btnText, createPost }) {

  const [post, setPost] = useState({title: '', body: ''});

  const handlePostTitleChange = (e) => {
    setPost({...post, title: e.target.value});
  }

  const handlePostBodyChange = (e) => {
    setPost({...post, body: e.target.value});
  }

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {...post, id: Date.now()};

    createPost(newPost);

    setPost({title: '', body: ''});
  }

  return (
    <MyPopup
      title="Создание поста"

      isOpen={isOpen}
      onClose={onClose}
      onSubmit={addNewPost}
      >
      <MyInput 
        type="text" 
        placeholder="Название" 
        className="form__input"
        minLength="2"
        value={post.title}
        onChange={handlePostTitleChange}
      />
      <textarea onChange={handlePostBodyChange} value={post.body} type="text" className="form__input form__input_type_body" placeholder="Текст поста" minLength="5" maxLength="400" />
      <MyButton className="form__btn">{btnText}</MyButton>
    </MyPopup>
  )
}

export default PostForm;