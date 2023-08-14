import React, {useState, useEffect} from "react";
import axios from "axios";

import './styles/App.css';

import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";


function App() {

  const [posts, setPosts] = useState([]);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);

  const closePopup = () => {
    setIsPostFormOpen(false);
  }

  const handleOpenPostFormClick = () => {
    setIsPostFormOpen(true);
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
      />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
