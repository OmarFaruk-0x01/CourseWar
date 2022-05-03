import { FC } from "react";
import { CheckBoxProps } from "./index.interface";

const CheckBox: FC<CheckBoxProps> = () => {
  return (
    <div className="flex items-center ">
      <input
        className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary-600 checked:border-primary-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />

      <label htmlFor="flexCheckDefault" className="sr-only">
        checkbox
      </label>
    </div>
  );
};

export default CheckBox;