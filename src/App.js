import React, { useState, useEffect } from "react";
import axios from "axios";

import './styles/App.css';

import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import PostFilter from "./components/PostFilter/PostFilter";
import Pagination from "./components/UI/pagination/Pagination";
import Loader from "./components/UI/loader/Loader";
import Error from "./components/UI/error/Error";

import usePosts from "./components/hooks/usePosts";
import useFetching from "./components/hooks/useFetching";
import usePagination from "./components/hooks/usePagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const { limit, page, changePage, setTotalPages, getPageCount, pagesArray } = usePagination(10);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    });
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
    setPosts(response.data);
  })

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

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
      {postsError && <Error error={postsError} />}
      {isPostsLoading
        ? <Loader />
        : <>
            <PostList 
              posts={sortedAndSearchedPosts}
              title="Список постов" 
              removePost={removePost} 
            />
            <Pagination
              page={page}
              pagesArray={pagesArray}
              changePage={changePage}
            />
          </>
      }
    </div>
  );
}

export default App;
