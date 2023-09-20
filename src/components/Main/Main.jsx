import React, { useState } from "react";
import PostList from "../PostList/PostList";
import MySelect from "../UI/select/MySelect";

function Main({ posts, removePost, sortPosts }) {

  const [selectedSort, setSelectedSort] = useState('');

  const handleSortPostsChange = (sort) => {
    setSelectedSort(sort);
    sortPosts(sort);
  }

  return (
    <main className="main">
      {posts.length 
        ? 
        <div className="main__container">
          <MySelect 
            defaultValue="Сортировка по"
            className="main__select"
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По тексту'}
            ]}
            value={selectedSort}
            onChange={handleSortPostsChange}
          />
          <PostList remove={removePost} posts={posts} title="Список постов" />
        </div>
        : 
        <p className="main__announcement">Постов не найдено</p>}
    </main>
  )
}

export default Main;