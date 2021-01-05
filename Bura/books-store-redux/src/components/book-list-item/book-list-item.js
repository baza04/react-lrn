import React, { Fragment } from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, price } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover"></div>

      <div className="book-details">
        <a href="#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}</div>
      </div>
    </div>
  );
};

export default BookListItem;
