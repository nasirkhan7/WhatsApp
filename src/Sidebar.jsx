import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Header from "./Header";
import Search from "./Search";
import { chats } from "./Data";
import Contact from "./Contact";
import { useState } from "react";

const Sidebar = () => {
  const [darkMode,setDarkMode]= useState(false);
  return (
    <>
      <div className={`col-3 ${darkMode && 'bg-dark text-white'}`} style={{ height: "100vh",}}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Search />
      {chats.map((item) =>{
        return <Contact {...item}/>
      })}
      </div>
    </>
  );
};

export default Sidebar;
