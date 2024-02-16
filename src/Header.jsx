import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { CiChat1 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({darkMode,setDarkMode}) => {
  return (
    <>
      <div className="w-100 d-flex justify-content-between p-3">
        <div className="left">
          <FaRegUserCircle size={30} cursor='pointer'/>
        </div>
        <div className="right d-flex gap-1">
          <GrUpdate size={30} cursor='pointer'/>
          <CiChat1 size={30} cursor='pointer'/>
          <BsThreeDotsVertical size={30} cursor='pointer' />
          <MdOutlineDarkMode onClick={()=>setDarkMode(!darkMode)} size={30} cursor='pointer' />

        </div>
      </div>
    </>
  );
};

export default Header;
