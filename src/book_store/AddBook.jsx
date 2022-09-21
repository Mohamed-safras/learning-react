import React from "react";
import { Link } from "react-router-dom";
const AddBook = ({ addBook, handelInput, book }) => {
  return (
    <React.Fragment>
      <form onSubmit={addBook}>
        <input
          name="title"
          type="text"
          placeholder="title"
          value={book.title}
          onChange={handelInput}
        />
        <input
          name="desc"
          type="text"
          placeholder="desc"
          value={book.desc}
          onChange={handelInput}
        />
        <input
          type="text"
          name="cover"
          placeholder="cover"
          value={book.cover}
          onChange={handelInput}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={book.price}
          onChange={handelInput}
        />
        <button type="submit">add</button>
      </form>
    </React.Fragment>
  );
};

export default AddBook;
