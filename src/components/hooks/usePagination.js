import { useState } from 'react';

export const usePagination = (limitCount = 10) => {
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(limitCount);
  const [page, setPage] = useState(1);

  const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
  }

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  }

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return {
    totalPages,
    setTotalPages,
    limit,
    setLimit,
    page,
    setPage,
    getPageCount,
    changePage,
    pagesArray
  }
}

export default usePagination;