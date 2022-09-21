import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddBook from "./AddBook";
import Books from "./Books";

const BookstoreApp = () => {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: 0,
  });

  const navigation = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8800/books");
      const data = await response.data;
      setBooks(data);
    } catch (error) {}
  };
  async function getUser() {
    try {
      const user = {
        id: 3,
        email: "awsafras@gmail.com",
      };
      const response = await axios
        .get(`http://localhost:8800/${user.id}`, user)
        .then((response) => console.log(response));
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
    getUser();
  }, []);

  const addBook = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      // setTitle("");

      navigation("/");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handelInput = (e) => {
    setBook((prevBook) => ({ ...prevBook, [e.target.name]: e.target.value }));
    console.log(book);
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Books books={books} />} />
        <Route
          path="addBook"
          element={
            <AddBook addBook={addBook} handelInput={handelInput} book={book} />
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default BookstoreApp;
