import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({ posts, removePost, title }) {

  return (
    <main className="main">
      <div className="main__container">
        {posts.length 
          ? 
          <>
            <p className="postlist__title">{title}</p>
            {posts.map(post => (
              <PostItem
                post={post}
                remove={removePost} 
                key={post.id} 
                title={post.title} 
                body={post.body} 
              />
            ))}
          </>
          : 
          <p className="main__announcement">Постов не найдено</p>}
      </div>
    </main>
  )
}

export default PostList;