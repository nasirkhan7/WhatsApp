import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <>
      <div className="d-flex mx-auto rounded-3 shadow align-items-center border-1 bg-white" style={{width: '96%' }}>
         <span>
          <CiSearch size={20} />
        </span>
        <div className="search w-100">
          <input
            type="search"
            className="form-control border-0 bg-transparent p-0 my-2 mx-auto rounded-1"
            placeholder="Search or start a new chat"
            id=""/> 
        </div>
      </div>
    </>
  );
};

export default Search;
