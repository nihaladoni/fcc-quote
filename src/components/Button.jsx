import React from "react";

const MyButton = ({ id, style, onClick, children }) => {
  return (
    <div>
      <button className="btn" id={id} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
