import React from "react";

const Contact = ({name,image,message}) => {
  return (
    <>
      <div className="d-flex gap-3 p-2">
        <div className="image">
          <img
            src={image}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="user-info">
          <h5>{name}</h5>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
