import React from "react";

const SearchBar = ({ ...rest }) => {
  return (
    <div className=" bg-gray-950 pb-10 pt-10 flex items-center justify-center  ">
      <input
        className="bg-gray-500 p-1 border-round-md outline-none text-white border-none "
        {...rest}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
