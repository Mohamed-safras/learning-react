import React, { useState } from "react";
import BirthDay from "./BirthDay";

const BirthDays = () => {
  const [birthDays, setBirthDays] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Larry Little",
      age: 29,
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Hester Hogan",
      age: 29,
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 29,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Michal",
      age: 29,
      img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div style={{ width: "350px", background: "#fff", padding: "10px" }}>
      <h3 style={{ margin: "10px" }}>
        {birthDays.length} {birthDays.length > 0 ? "birthdays" : "birthday"}
      </h3>
      {birthDays.map((birthDay) => (
        <BirthDay key={birthDay.id} birthDay={birthDay} />
      ))}
      <button
        style={{
          width: "100%",
          height: "30px",
          border: "none",
          outline: "none",
          background: "pink",
          color: "white",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => setBirthDays([])}
      >
        Clear All
      </button>
    </div>
  );
};

export default BirthDays;
