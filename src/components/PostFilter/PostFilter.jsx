import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
 
  return (
    <section className="filter">
      <div className="filter__container">
        <MyInput 
          type="text"
          placeholder="Поиск"
          className="filter__search-input"
          minLength="2"
          name="search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
        <MySelect 
          defaultValue="Сортировка по"
          className="filter__sort"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По тексту'}
          ]}
          value={filter.sort}
          onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        />
      </div>
    </section>
  )
}

export default PostFilter;