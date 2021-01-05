import React from "react";

const styles = {
    ul: {
        
    }
}

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number => {
            <li key={number.id} >
                <a onClick={() => paginate(number)} href='!#' >
                    {number}
                </a>
            </li>
        }))}
      </ul>
    </nav>
  );
}

export default Pagination;
