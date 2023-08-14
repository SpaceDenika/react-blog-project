import React from 'react';
import './PostItem.css';

function PostItem({ title, description }) {


  return (
    <article className="post">
      <header className="post__header">
        <h2 className="post__title">{title}</h2>
      </header>
      <section className="post__main">
        <p className="post__text">{description}</p>
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