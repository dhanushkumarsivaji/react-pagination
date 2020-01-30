import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate ,currentPage}) => {
  const pageNumbers = [];
  let check = Math.floor(totalPosts / postsPerPage)

  for (let i = 1; i <= Math.floor(totalPosts / postsPerPage); i++) {
    let active = currentPage === i ? 'active' : ''
  pageNumbers.push(<li className={`page-item ${active}`}key={i} onClick={()=>paginate(i)}><a href='!#' className='page-link'>{i}</a></li>);
  }

  return (
    <nav>
      <ul className='pagination'>
        {currentPage > 1 ? <li className='page-item' onClick={()=>paginate(currentPage - 1)}><a className="page-link" href="!#">Prev</a></li>:''}
        {pageNumbers}
        {currentPage < check  ? <li className='page-item' onClick={()=>paginate(currentPage + 1)}><a className="page-link" href="!#">Next</a></li>:''}
      </ul>
    </nav>
  );
};

export default Pagination;
