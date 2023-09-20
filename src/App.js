import React, {useState, useEffect} from "react";
import axios from "axios";

import './styles/App.css';

import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import Main from "./components/Main/Main";


function App() {

  const [posts, setPosts] = useState([]);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);


  const closePopup = () => {
    setIsPostFormOpen(false);
  }

  const handleOpenPostFormClick = () => {
    setIsPostFormOpen(true);
  }

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    closePopup();
  }

  const removePost = (post) => {
    setPosts(posts.filter(postItem => postItem.id !== post.id));
  }

  const sortPosts = (sort) => {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
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
        onPostForm={handleOpenPostFormClick}
      />
      <PostForm
        isOpen={isPostFormOpen}
        onClose={closePopup}
        createPost={createPost}
        btnText="Создать"
      />
      <Main 
        posts={posts} 
        removePost={removePost}
        sortPosts={sortPosts}
      />
    </div>
  );
}

export default App;
