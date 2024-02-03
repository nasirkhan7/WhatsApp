import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Header from "./Header";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <div
        className="col-3"
        style={{
          height: "100vh",
        }}
      >
        <Header />
        <Search />
      </div>
    </>
  );
};

export default Sidebar;
