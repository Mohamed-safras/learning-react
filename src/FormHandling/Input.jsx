import React from "react";

const Input = ({ name, value, type, placeholder, checked, handelInput }) => {
  return (
    <div className="input-field">
      <input
        value={value}
        onChange={handelInput}
        name={name}
        type={type}
        placeholder={placeholder}
        checked={checked}
      />
    </div>
  );
};

export default Input;
