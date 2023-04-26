import React from "react";
import { FiSearch } from "react-icons/fi";

function Search(props) {
  return (
    <div className="flex items-center bg-gray-50 border-b border-b-gray-300 pr-2">
      <input
        placeholder={props.value}
        className="p-2 bg-gray-50 outline-none w-[100%]"
        type="text"
      />
      {props.search && <FiSearch className="h-full flex w-5 " />}
    </div>
  );
}

export default Search;
