import React from "react";

const BirthDay = ({ birthDay }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <div
        className="profile"
        style={{ width: "60px", height: "60px", marginRight: "10px" }}
      >
        <img
          src={birthDay.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="birthday-person-details">
        <h4>{birthDay.name}</h4>
        <p>{birthDay.age}</p>
      </div>
    </div>
  );
};

export default BirthDay;
