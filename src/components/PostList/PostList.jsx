import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({ posts }) {

  return (
    <>
      {posts.map(post => (
        <PostItem key={post.id} title={post.title} description="description" />
      ))}
    </>
  )
}

export default PostList;