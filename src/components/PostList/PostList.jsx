import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({ remove, posts, title }) {

  return (
    <>
      <p className="postlist__title">{title}</p>
      {posts.map(post => (
        <PostItem
          post={post}
          remove={remove} 
          key={post.id} 
          title={post.title} 
          body={post.body} 
        />
      ))}
    </>
  )
}

export default PostList;