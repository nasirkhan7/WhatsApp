import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="d-flex align-items-center border-1 bg-white">
        <span>
          <FaSearch />
        </span>
        <div className="search w-100">
          <input
            type="search"
            className="form-control border-0 bg-transparent my-2 mx-auto rounded-1"
            placeholder="Search or start a new chat"
            id=""/>
        </div>
      </div>
    </>
  );
};

export default Search;
