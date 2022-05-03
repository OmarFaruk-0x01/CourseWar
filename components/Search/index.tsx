import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DashIcon from "../DashIcon";
import { SearchProps } from "./index.interface";

const Search: FC<SearchProps> = ({ extentClassName = "", ...props }) => {
  return (
    <div
      className={
        "relative flex flex-row-reverse bg-gray-100 rounded-md  " +
        extentClassName
      }
      {...props}
    >
      <input
        className="peer rounded-md w-full pr-3 outline-none bg-gray-100 z-10 text-sm"
        type="search"
        placeholder="Search"
      />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 outline outline-1 rounded-md 
      outline-gray-100 peer-focus:outline-primary-500 -z-[0] transition-colors"
      />
      <DashIcon
        _Icon={AiOutlineSearch}
        className="p-2 text-xl text-gray-400 peer-focus:text-primary-400 transition-colors"
      />
    </div>
  );
};

export default Search;
