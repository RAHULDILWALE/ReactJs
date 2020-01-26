import React from 'react';
import { Link } from 'react-router'


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  





  return (

    <div  style ={{display: "flex",marginleft:"auto",marginright:"auto"}}>
 <nav class="navbar navbar-inverse"  >
      <ul class="nav navbar-nav" >
        {pageNumbers.map(number => (
          <li key={number} className='page-item'  style ={{display: "flex",marginleft:"auto",marginright:"auto",  alignitems: "center"}}>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    </div>
   
  );
};

export default Pagination;