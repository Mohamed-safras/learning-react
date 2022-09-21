import React from "react";
import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Books = ({ books }) => {
  return (
    <React.Fragment>
      <div style={styles}>
        {books.map(({ id, title, desc, price }) => (
          <div
            style={{
              margin: "10px",
              backgroundColor: "pink",
              width: "100px",
              height: "100px",
            }}
            key={id}
          >
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{price}</p>
            <button>delete</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/addbook">addbook</Link>
      </button>
    </React.Fragment>
  );
};

export default Books;
