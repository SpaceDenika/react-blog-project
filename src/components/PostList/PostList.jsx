import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({ remove, posts }) {

  return (
    <>
      {posts.map(post => (
        <PostItem 
          remove={() => remove(post)} 
          key={post.id} 
          title={post.title} 
          body={post.body} 
        />
      ))}
    </>
  )
}

export default PostList;