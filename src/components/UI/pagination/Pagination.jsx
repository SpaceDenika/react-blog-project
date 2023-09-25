import React from "react";
import MyButton from "../button/MyButton";

function Pagination({ page, pagesArray, changePage }) {

  return (
    <section className="pagination">
      <div className="pagination__container">
        {pagesArray.map(p => (
          <MyButton onClick={() => changePage(p)} key={p} className={page === p ? 'page page__active' : 'page'}>{p}</MyButton>
        ))}
      </div>
    </section>
  )
}

export default Pagination;