import React, { useState, useEffect } from "react";
import axios from "axios";

import './styles/App.css';

import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import PostFilter from "./components/PostFilter/PostFilter";
import { usePosts } from "./components/hooks/usePosts";


function App() {

  const [posts, setPosts] = useState([]);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const closePopup = () => {
    setIsPostFormOpen(false);
  }

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    closePopup();
  }

  const removePost = (post) => {
    setPosts(posts.filter(postItem => postItem.id !== post.id));
  }
  
  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Header 
        onPostForm={setIsPostFormOpen}
      />
      <PostForm
        isOpen={isPostFormOpen}
        onClose={closePopup}
        createPost={createPost}
        btnText="Создать"
      />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        posts={sortedAndSearchedPosts}
        title="Список постов" 
        removePost={removePost} 
      />
    </div>
  );
}

export default App;
