import React from 'react';
import './PostItem.css';

function PostItem({ post, title, body, remove }) {

  const handleRemovePostClick = () => {
    remove(post);
  }

  return (
    <article className="post">
      <button onClick={handleRemovePostClick} className="post__remove"></button>
      <header className="post__header">
        <h2 className="post__title">{title}</h2>
      </header>
      <section className="post__main">
        <p className="post__text">{body}</p>
      </section>
      {/* <section className="post__comments">
        <article className="post__comment">
          <h2 className="post__comment-author">Comment Author</h2>
          <p className="post__comment-text">Comment Text</p>
          <p className="post__comment-email">Email</p>
        </article>
      </section> */}

    </article>
  )
}

export default PostItem;